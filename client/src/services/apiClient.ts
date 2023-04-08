/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { Buffer } from 'buffer/'

const TYPE = 'application/json'
const CONTENT_TYPE = 'Content-Type'
const API_USER = import.meta.env.API_USER
const API_PASSW = import.meta.env.API_PASSW

const authorization =
  'Basic ' + Buffer.from(API_USER + ':' + API_PASSW).toString('base64')

const apiClient = (method: string, query: string, data?: any) =>
  axios({
    method,
    url: query,
    data,
    headers: {
      Accept: TYPE,
      [CONTENT_TYPE]: TYPE,
      Authorization: authorization
    }
  })

export default apiClient
