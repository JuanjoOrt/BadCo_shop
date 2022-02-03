import { Routes, Route } from 'react-router-dom'
import './styles/index.scss'
import OrdersHistory from './Pages/OrdersHistory'
import Checkout from './Pages/Checkout'
import Products from './Pages/Products'
import NotFound from './Pages/NotFound'
import Detail from './Pages/Detail'
import About from './Pages/About'
import Login from './Pages/Login'
import Home from './Pages/Home'

function App () {
  return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/detail/:id" element={<Detail />} />
			<Route path="/login" element={<Login />} />
			<Route path="/products" element={<Products />} />
			<Route path="/checkout" element={<Checkout />} />
			<Route path="/orders" element={<OrdersHistory />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
  )
}

export default App
