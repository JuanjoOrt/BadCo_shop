import Layout from '../../Components/Layout'
import ProductsHistory from './ProductsHistory'
import FormCheckout from './ProductsHistory/FormCheckout'
import { useContext, useEffect } from 'react'
import CartContext from '../../Context/ContextCart'
import EmptyCart from './ProductsHistory/emptyCart'
import './styles.scss'

export default function Checkout () {
  const { items } = useContext(CartContext)
  const existItems = items.length > 0
  useEffect(() => { window.scrollTo({ top: 0 }) }, [])

  return (
    <Layout hideShoppingCart>
      <div className='checkout-container'>
        {
          existItems
            ? <>
                <div className="checkout-left"><ProductsHistory /></div>
                <div className="checkout-right"><FormCheckout /></div>
              </>
            : <EmptyCart />
        }

      </div>
    </Layout>
  )
}
