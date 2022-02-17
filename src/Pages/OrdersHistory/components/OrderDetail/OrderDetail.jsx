import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import './styles.scss'
import { useState } from 'react'
import { DateTime } from 'luxon'
import OrderStatus from '../OrderStatus/OrderStatus'

export default function OrderDetail ({ order }) {
  const [show, setShow] = useState(false)
  const classShow = show ? 'show' : 'hide'
  const date = DateTime.fromISO(order?.created_date)
    .setLocale('es')
    .toFormat('dd MMMM yyyy')

  return (
    <div className='order-detail'>
      <div className='order-detail-header'>
        <div className='order-detail-header__image'>
          <div>
            <img src={order.products[0].image} alt='imagen de pedido'/>
          </div>
        </div>
        <div className='order-detail-header__info'>
          <div className='order-detail-header__info-title'>
            <span className='order-detail-header__info-title-date'>{date}</span>
            <span className='order-detail-header__info-title-price'>Total: {order.totalPrice} €</span>
          </div>
          <div className='order-detail-header__info-icon'>
            <div onClick={() => setShow(!show)}>
              {show ? <IoIosArrowUp /> : <IoIosArrowDown/>}
            </div>
          </div>
        </div>
      </div>
      <div className={`order-detail-body ${classShow}`}>
        <div className='order-detail-body__left'>
          <OrderStatus status={order.status} date={order.created_date}/>
        </div>
        <div className='order-detail-body__right'>
          <div className='order-detail-body__right-details'>
            <span>Fecha del pedido: {date}</span>
            <span>Dirección: {order.address}, {order.country}</span>
          </div>
          <div className='order-detail-body__right-price'>
            Total: {order.totalPrice} €
          </div>
        </div>
      </div>
    </div>
  )
}
