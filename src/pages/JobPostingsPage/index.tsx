import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../api'
import { JobPosting } from '../../types'
import { JobPostings } from './JobPostings'

// export class JobPostingsPage extends React.Component<{}, State> {
//   state = {
//     jobPostings: [],
//     loading: true,
//   }

//   componentDidMount() {
//     API.jobPostings.loadAll().then(({ data }) => {
//       this.setState({
//         jobPostings: data,
//         loading: false,
//       })
//     })
//   }

//   render() {
//     if (this.state.loading) {
//       return null
//     }

//     return (
//       <div>
//         <h1>Job Postings</h1>

//         <JobPostings jobPostings={this.state.jobPostings} />
//       </div>
//     )
//   }
// }

export function JobPostingsPage() {

  const [jobPostings, setJobPostings] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  API.jobPostings.loadAll().then(({ data }) => {
    setJobPostings(data);
    setLoading(false)
    console.log(data);
  })
}, [])
  return loading? null: (
    <div>
        <h1>Job Postings</h1>
        <Link to="/job_postings/new"><button>New Job</button></Link>
        <JobPostings jobPostings={jobPostings} />
      </div>
  )
}
