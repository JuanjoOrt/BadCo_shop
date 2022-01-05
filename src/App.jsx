import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About'
import Detail from './Pages/Detail'
import Login from './Pages/Login'
import Products from './Pages/Products'
import NotFound from './Pages/NotFound'

function App() {

  return (
    <BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/detail" element={<Detail />} />
			<Route path="/login" element={<Login />} />
			<Route path="/products" element={<Products />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	</BrowserRouter>
  )
}

export default App
