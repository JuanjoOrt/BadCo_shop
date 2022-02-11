import { useContext, useEffect } from 'react'
import ContextCheckout from '../../../Context/ContextCheckout'
import { pushOrder } from '../../../Services/serviceOrders'
import ContextCart from '../../../Context/ContextCart'
import './styles.scss'
import { DateTime } from 'luxon'
import GlobalContext from '../../../Context/Context'
import useShoppingCart from '../../../Hooks/useShoppingCart'
import generateStatus from '../../../utils/generateStatus'

export default function Done () {
  const { getArticlesPrice } = useShoppingCart()
  const { setItems, items } = useContext(ContextCart)
  const { info, setInfo } = useContext(ContextCheckout)
  const { user } = useContext(GlobalContext)
  const deliverDate = DateTime.now().plus({ days: 3 })
    .setLocale('es')
    .toFormat("dd 'de 'LLL")
  const order = {
    userMail: user.profileObj.email,
    created_date: DateTime.now().toISO(),
    address: info.address,
    country: info.country,
    orders: items,
    totalPrice: getArticlesPrice(),
    status: generateStatus()
  }

  useEffect(() => {
    pushOrder(order)
    return () => {
      setInfo(null)
      setItems([])
    }
  }, [])

  return <div className='checkout-done'>
    <div className='checkout-done__title'>¡PEDIDO REALIZADO!</div>
    <div className='checkout-done__description'>
      <div>El pedido llegará a la dirección <span className="checkout-done__description-bold">{info.address}, {info.country}</span></div>
      <div>el día <span className="checkout-done__description-bold">{deliverDate}</span> antes de las <span className="checkout-done__description-bold">10:00</span></div>
    </div>
  </div>
}
