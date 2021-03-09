import axios from 'axios'

import { IndividualPostingApiResponse, FormData } from '../../types'
import { endpoints } from '../endpoints'

export {};

export interface JobPostingApi {
  post: (formData: FormData) => Promise<IndividualPostingApiResponse>
}

export const jobPosting: JobPostingApi = {
  post: (formData: FormData) => axios.post(`${endpoints.jobPostings}`, formData)
}