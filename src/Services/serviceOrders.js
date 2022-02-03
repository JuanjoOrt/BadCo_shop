import { ORDERS } from './constants'
import fetchApi from './index'

export const pushOrder = (body) => {
  return fetchApi('POST', ORDERS, body)
}
