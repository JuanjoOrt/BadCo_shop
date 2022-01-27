import { Routes, Route } from 'react-router-dom'
import './styles/index.scss'
import Home from './Pages/Home'
import About from './Pages/About'
import Detail from './Pages/Detail'
import Login from './Pages/Login'
import Products from './Pages/Products'
import NotFound from './Pages/NotFound'
import Checkout from './Pages/Checkout'

function App () {
  return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/detail/:id" element={<Detail />} />
			<Route path="/login" element={<Login />} />
			<Route path="/products" element={<Products />} />
			<Route path="/checkout" element={<Checkout />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
  )
}

export default App
