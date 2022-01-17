import { PRODUCTS_LIST } from './constants'
import fetchApi from './index'

export const getProducts = () => {
  return fetchApi('GET', PRODUCTS_LIST)
}
