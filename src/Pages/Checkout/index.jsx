import Layout from '../../Components/Layout'
import ProductsHistory from './ProductsHistory'
import './styles.scss'

export default function Checkout () {
  return (
    <Layout>
      <div className='checkout-container'>
        <div className="checkout-left"><ProductsHistory /></div>
        <div className="checkout-right"></div>
      </div>
    </Layout>
  )
}
