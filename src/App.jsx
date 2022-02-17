import { Route, Switch } from 'react-router-dom'
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
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route exact path="/detail/:id" component={Detail} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/products" component={Products} />
			<Route exact path="/checkout" component={Checkout} />
			<Route exact path="/orders" component={OrdersHistory} />
			<Route component={NotFound} />
		</Switch>
  )
}

export default App
