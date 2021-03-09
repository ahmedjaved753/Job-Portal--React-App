import axios from 'axios'

import { IndividualPostingApiResponse } from '../../types'
import { endpoints } from '../endpoints'

export interface IndividualJobPostingApi {
  loadAll: (id:string) => Promise<IndividualPostingApiResponse>
}

export const individualjobPosting: IndividualJobPostingApi = {
  loadAll: (id:string) => axios.get(`${endpoints.individualJobPosting}${id}`)
}