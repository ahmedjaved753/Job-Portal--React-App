import { AxiosResponse } from 'axios'

export interface Category {
  id: number
  name: string
}

export interface Location {
  id: number
  name: string
  street_address_1?: string
  street_address_2?: string
  city: string
  state: string
  zip_code: string
}

export interface individualJobPosting {
    id: number
    title: string
    status: string
    description: string
    posted_at: string
    category: {
      id: number
      name: string
    }
    location: {
      id: number
      name: string
      street_address_1: string
      street_address_2: string | null
      city: string
      state: string
      zip_code: string
    }
    job_poster: {
      id: number
      full_name: string
    }
}

export interface JobPoster {
  id: number
  full_name: string
}

export interface JobPosting {
  id: number
  title: string
  status: string
  description?: string
  posted_at: string
  category: Category
  location: Location
  job_poster: JobPoster
}

export interface FormData {
    title: string,
    description: string,
    job_poster_id: string|null,
    category_id: string|null,
    location_id: string|null
}

export interface JobPostingsApiResponse extends AxiosResponse {
  data: JobPosting[]
}

export interface CategoriesApiResponse extends AxiosResponse {
  data: Category[]
}

export interface LocationsApiResponse extends AxiosResponse {
  data: Location[]
}

export interface IndividualPostingApiResponse extends AxiosResponse {
  data: individualJobPosting
}

export interface JobPostersApiResponse extends AxiosResponse {
  data: JobPoster[]
}
