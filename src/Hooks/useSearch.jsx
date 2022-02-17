import { useContext } from 'react'
import GlobalContext from '../Context/Context'
import { useHistory, useLocation } from 'react-router-dom'

export default function useSearch () {
  const { setSearch, search } = useContext(GlobalContext)
  const history = useHistory()
  const location = useLocation()

  const navigate = () => { if (location.pathname !== '/products') history.push('/products') }

  const handleSearch = (e) => {
    const text = e.target.value
    setSearch(text)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate()
  }

  return { search, handleSearch, handleSubmit, navigate }
}
