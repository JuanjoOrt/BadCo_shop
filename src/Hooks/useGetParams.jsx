import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getDetails } from '../Services/serviceDetail'

export default function useGetProduct () {
  const { data } = useQuery('details', getDetails)
  const { id } = useParams()
  let isError = false
  let product

  if (data) {
    product = data.find((product) => product.id === id)
    if (!product) isError = true
  }

  return { data: product, isError }
}
