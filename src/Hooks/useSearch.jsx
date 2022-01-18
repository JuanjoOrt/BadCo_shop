import { useContext } from 'react'
import GlobalContext from '../Context/Context'
import { useLocation, useNavigate } from 'react-router-dom'

export default function useSearch () {
  const { setSearch, search } = useContext(GlobalContext)
  const navigateTo = useNavigate()
  const location = useLocation()

  const handleSearch = (e) => {
    const text = e.target.value
    setSearch(text)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (location.pathname !== '/products') navigateTo('/products')
  }

  return { search, handleSearch, handleSubmit }
}
