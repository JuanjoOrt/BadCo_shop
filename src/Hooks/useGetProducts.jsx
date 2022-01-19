import { useQuery } from 'react-query'
import { getProducts } from '../Services/serviceProducts'
import { useContext, useEffect, useState } from 'react'
import GlobalContext from '../Context/Context'

export default function useGetProducts () {
  const { search } = useContext(GlobalContext)
  const { isLoading, data } = useQuery('productsList', getProducts)
  const [dataToRender, setDataToRender] = useState([])

  const searchEngine = () => {
    const saveData = (search !== '')
      ? data.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
      : data
    setDataToRender(saveData)
  }

  useEffect(() => {
    if (data && search === '') setDataToRender(data)
    if (data && search !== '') searchEngine()
  }, [data])

  useEffect(() => {
    if (data) {
      searchEngine()
    }
  }, [search])

  return { data: dataToRender, isLoading }
}
