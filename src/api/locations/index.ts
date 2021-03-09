import axios from 'axios'

import { LocationsApiResponse } from '../../types'
import { endpoints } from '../endpoints'

export interface LocationsApi {
  loadAll: () => Promise<LocationsApiResponse>
}

export const locations: LocationsApi = {
  loadAll: () => axios.get(endpoints.locations),
}