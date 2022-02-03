import ProductsHistory from './ProductsHistory'
import FormCheckout from './FormCheckout'

export default function CheckOutPending () {
  return (
    <>
      <div className="checkout-left"><ProductsHistory /></div>
      <div className="checkout-right"><FormCheckout /></div>
    </>
  )
}
