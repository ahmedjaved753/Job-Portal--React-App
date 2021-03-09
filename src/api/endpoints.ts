//const baseURL = process.env.REACT_APP_API_ENDPOINT
let baseURL='';
if(process.env.NODE_ENV === 'development') {
  baseURL = 'https://jerbyjerbs-rails.herokuapp.com/api'
}
console.log(baseURL)
export const endpoints = {
  categories: `${baseURL}/v1/categories`,
  jobPostings: `${baseURL}/v1/job_postings`,
}
