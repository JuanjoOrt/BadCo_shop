import { IoCloseSharp } from 'react-icons/io5'
import './HistoryItem.scss'
import useShoppingCart from '../../../../Hooks/useShoppingCart'

export default function HistoryItem ({ product }) {
  const { removeCart } = useShoppingCart()
  const handleRemove = () => removeCart(product)

  return (
    <div className='history-item'>
      <div className='history-item__image'><img src={product.image} alt='product image'/></div>
      <div className='history-item__title'>
        <div>{product.name}</div>
        <div className='history-item__id'>ID: {product.id}</div>
        <div className='history-item__id'>Count: {product.count}</div>
      </div>
      <div className='history-item__price'>
        <div>{product.price} €</div>
        <div className='history-item__size'>Talla: <span>{product.size}</span></div>
      </div>
      <div className='history-item__remove'><IoCloseSharp onClick={handleRemove}/></div>
    </div>
  )
}
