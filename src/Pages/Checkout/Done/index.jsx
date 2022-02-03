import { useContext, useEffect } from 'react'
import ContextCheckout from '../../../Context/ContextCheckout'
import ContextCart from '../../../Context/ContextCart'
import './styles.scss'
import { DateTime } from 'luxon'

export default function Done () {
  const { setItems } = useContext(ContextCart)
  const { info, setInfo } = useContext(ContextCheckout)
  const deliverDate = DateTime.now().plus({ days: 3 })
    .setLocale('es')
    .toFormat("dd 'de 'LLL")

  useEffect(() => () => {
    setInfo(null)
    setItems([])
  }, [])

  return <div className='checkout-done'>
    <div className='checkout-done__title'>¡PEDIDO REALIZADO!</div>
    <div className='checkout-done__description'>
      <div>El pedido llegará a la dirección <span className="checkout-done__description-bold">{info.address}, {info.country}</span></div>
      <div>el día <span className="checkout-done__description-bold">{deliverDate}</span> antes de las <span className="checkout-done__description-bold">10:00</span></div>
    </div>
  </div>
}
