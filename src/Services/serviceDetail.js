import { DETAIL_LIST } from './constants'
import fetchApi from './index'

export const getDetails = () => {
  return fetchApi('GET', DETAIL_LIST)
}
