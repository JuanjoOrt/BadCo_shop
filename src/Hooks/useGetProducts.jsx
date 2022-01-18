import { useQuery } from 'react-query'
import { getProducts } from '../Services/serviceProducts'
import { useContext, useEffect, useState } from 'react'
import GlobalContext from '../Context/Context'

export default function useGetProducts () {
  const { search } = useContext(GlobalContext)
  const { isLoading, data } = useQuery('productsList', getProducts)
  const [dataToRender, setDataToRender] = useState([])

  useEffect(() => { if (data) setDataToRender(data) }, [data])

  useEffect(() => {
    if (data) {
      const saveData = (search !== '')
        ? data.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
        : data
      setDataToRender(saveData)
    }
  }, [search])

  return { data: dataToRender, isLoading }
}
