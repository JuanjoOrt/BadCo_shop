import { FiShoppingCart } from 'react-icons/fi'
import './shoppingCart.scss'
import { useContext } from 'react'
import ContextCart from '../../Context/ContextCart'

export default function ShoppingCart ({ hideShoppingCart }) {
  const { setVisible } = useContext(ContextCart)
  const handleClick = () => setVisible(true)

  return (
    <div className='shopping-cart'>
      {!hideShoppingCart && <FiShoppingCart className='shopping-cart-icon' onClick={handleClick}/>}
    </div>
  )
}
