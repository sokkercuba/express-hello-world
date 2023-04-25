/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from 'react'
import apiClient from './apiClient'
import { StoreAction } from '../store/storeReducer'
import { setError, setLoading, setErrorMsg } from '../store/actions'
import { SokkerCredentials } from '../types/user'

interface ApiParams {
  col: string
  key: string
}

export const setCollection = (params: ApiParams, body: any) => {
  const { col, key } = params
  return apiClient('POST', `/api/v1/${col}/${key}`, body)
}

export const deleteCollection = (params: ApiParams) => {
  const { col, key } = params || null
  return apiClient('DELETE', `/api/v1/${col}/${key}`)
}

export const getCollection = (params: ApiParams) => {
  const { col, key } = params || null
  return apiClient('GET', `/api/v1/${col}/${key}`)
}

export const getCollections = (col: string) => {
  return apiClient('GET', `/api/v1/${col}`)
}

export const handleApiRequest = (
  query: string,
  method: string,
  dispatch: Dispatch<StoreAction>,
  body?: SokkerCredentials | any,
) => {
  setLoading(dispatch, true)

  const result = apiClient(method, query, body)
    .then((response) => {
      const { status, data } = response || null

      if (status === 200 && !data?.error) {
        console.log('🚀 ~ handleApiRequest success:', response)
        setError(dispatch, false)
        setErrorMsg(dispatch, '')
        return { ...data, status }
      }
      if (data?.error) {
        console.log('🚀 ~ handleApiRequest fail:', response)
        setError(dispatch, true)
        setErrorMsg(dispatch, data?.error)
        return { ...data, status }
      }
    })
    .catch((error) => {
      const { data, status } = error.response || null
      console.log('🚀 ~ handleApiRequest error:', error)
      setError(dispatch, true)
      setErrorMsg(dispatch, data?.error || error?.message)
      return { ...data, status }
    })
    .finally(() => setLoading(dispatch, false))

  return result
}
