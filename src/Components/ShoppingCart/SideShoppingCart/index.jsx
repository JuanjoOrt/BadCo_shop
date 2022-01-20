import './sideShoppingCart.scss'
import { useContext, useEffect, useRef } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import ContextCart from '../../../Context/ContextCart'
import ItemCart from './ItemCart'
import EmptyCart from '../../EmptyCart'

export default function SideShoppingCart () {
  const { visible, setVisible, addButtonRef, items } = useContext(ContextCart)
  const classVisible = visible ? 'show' : ''
  const emptyCart = items.length === 0
  const ref = useRef()

  const closeModal = () => setVisible(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target) && !addButtonRef?.current?.contains(event.target)) closeModal()
    }

    if (visible) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [ref, visible])

  return (
    <div className={`side-shopping-cart ${classVisible}`} ref={ref}>
      <div className='side-shopping-cart__header'><IoCloseSharp onClick={closeModal}/></div>
      <div className='side-shopping-cart__body'>
        {items.map((item, index) => <ItemCart key={index} item={item}/>)}
        {emptyCart && <EmptyCart />}
      </div>
      <div className='side-shopping-cart__bottom'>
        {!emptyCart && <button>Tramitar pedido</button>}
      </div>
    </div>
  )
}
