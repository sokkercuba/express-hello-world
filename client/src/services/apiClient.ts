/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

const TYPE = 'application/json'
const CONTENT_TYPE = 'Content-Type'
const API_KEY = import.meta.env.API_KEY

const apiClient = (method: string, query: string, data?: any) =>
  axios({
    method,
    url: query,
    data,
    headers: {
      Accept: TYPE,
      [CONTENT_TYPE]: TYPE,
      Authorization: API_KEY
    }
  })

export default apiClient
