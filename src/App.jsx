import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Detail from './Pages/Detail'
import Login from './Pages/Login'
import Products from './Pages/Products'
import NotFound from './Pages/NotFound'
import { useContext, useEffect } from 'react'
import GlobalContext from './Context/Context'

function App () {
  const { setUser } = useContext(GlobalContext)

  useEffect(() => {
    setUser('Usuario de prueba')
  }, [])

  return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/detail" element={<Detail />} />
			<Route path="/login" element={<Login />} />
			<Route path="/products" element={<Products />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
  )
}

export default App
