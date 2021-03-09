import React, { useEffect, useState } from 'react'
import {Category, Location, JobPoster, FormData} from '../../types'
import {useHistory} from 'react-router-dom'
import { API } from '../../api'

const NewJobPostingPage:React.FC = () => {  
    const [formData, setFormData] = useState<FormData>({title: "", description: "", location_id: "1",job_poster_id:"1", category_id: "1",});
    const [catagories, setCatagories] = useState<Category[]>([])
    const [locations, setLocations] = useState<Location[]>([])
    const [jobPosters, setJobPosters] = useState<JobPoster[]>([])


    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        console.log(formData);
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const history = useHistory();

    function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        API.jobPosting.post(formData).then(() => {
            history.push("/");
        })
    }

    useEffect(() => {
  API.locations.loadAll().then(( {data} ) => {
    setLocations(data)
    // setFormData({...formData, location: data[0].id})
    console.log(data);
  })
}, [])

useEffect(() => {
  API.categories.loadAll().then(( {data} ) => {
    setCatagories(data)
    // setFormData({...formData, category: data[0].id})
    console.log(data);
  })
}, [])

useEffect(() => {
  API.jobPosters.loadAll().then(( {data} ) => {
    setJobPosters(data)
    // setFormData({...formData, jobPoster: data[0].id})
    console.log(data);
  })
}, [])
    return (
        <div>
            <form onSubmit={onSubmit}>
                Title:<input value={formData.title} onChange={onChangeHandler} name="title" type="text"/>
                Description:<input value={formData.description} onChange={onChangeHandler} name="description" type="text"/>
                categories:<select value={formData.category_id as string} onChange={onChangeHandler} name="category_id">
                    {catagories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                </select>
                Location:<select value={formData.location_id as string} onChange={onChangeHandler} name="location_id">
                    {locations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)}
                </select>
                JobPoster:<select value={formData.job_poster_id as string} onChange={onChangeHandler} name="job_poster_id">
                    {jobPosters.map(jobPoster => <option key={jobPoster.id} value={jobPoster.id}>{jobPoster.full_name}</option>)}
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewJobPostingPage
