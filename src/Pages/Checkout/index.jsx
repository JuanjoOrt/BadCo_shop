import { useContext, useEffect } from 'react'
import Layout from '../../Components/Layout'
import ContextCheckout from '../../Context/ContextCheckout'
import CartContext from '../../Context/ContextCart'
import CheckOutPending from './CheckoutPending'
import EmptyCart from './emptyCart'
import Done from './Done'
import './styles.scss'

const statusObj = {
  1: <EmptyCart />,
  2: <CheckOutPending />,
  3: <Done />
}

export default function Checkout () {
  const { info } = useContext(ContextCheckout)
  const { items } = useContext(CartContext)
  const existItems = items.length > 0
  const status = (info) ? 3 : (existItems) ? 2 : 1
  useEffect(() => { window.scrollTo({ top: 0 }) }, [])

  return (
    <Layout hideShoppingCart>
      <div className='checkout-container'>
        {statusObj[status]}
      </div>
    </Layout>
  )
}
