import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalContextProvider } from './Context/Context'
import Home from './Pages/Home'
import About from './Pages/About'
import Detail from './Pages/Detail'
import Login from './Pages/Login'
import Products from './Pages/Products'
import NotFound from './Pages/NotFound'

const composeProviders = (...providers) => ({ children }) => {
  return providers.reduceRight(
	  (child, Provider) => <Provider>{child}</Provider>,
	  children
  )
}

function App () {
  const Providers = composeProviders(
	  BrowserRouter,
	  GlobalContextProvider
  )

  	return (
		<Providers>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/detail" element={<Detail />} />
				<Route path="/login" element={<Login />} />
				<Route path="/products" element={<Products />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Providers>
  	)
}

export default App
