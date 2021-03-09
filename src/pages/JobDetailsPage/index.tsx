import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import { API } from '../../api'
import { individualJobPosting } from '../../types'

interface ParamTypes {
  id: string | undefined
}


 const JobdetailsPage:React.FC = () => {
    const [jobPosting, setJobPosting] = useState<individualJobPosting>({} as individualJobPosting)
    const [loading, setLoading] = useState(true)

    const { id } = useParams<ParamTypes>()
    useEffect(() => {
        API.individualjobPosting.loadAll(id as string).then(({ data }) => {
        setJobPosting(data)
        console.log(data);
        setLoading(false)
    })
    }, [id])

    const postedDate = (postedAt: string) => postedAt.split('T')[0]

    
    return loading? <h1>loading....</h1>: (
        <div>
            <p>{postedDate(jobPosting.posted_at)}</p>
            <p>{jobPosting.title}</p>
            <p>{jobPosting.job_poster.full_name}</p>
            <p>{jobPosting.category.name}</p>
            <p>{jobPosting.location.name}</p>
            <p >{jobPosting.status}</p>
            <Link to="/"><button>Return to all job postings</button></Link>
        </div>
    )
}

export default JobdetailsPage;