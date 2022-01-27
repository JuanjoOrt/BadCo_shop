import { IoCloseSharp } from 'react-icons/io5'
import './ItemCard.scss'
import useShoppingCart from '../../../Hooks/useShoppingCart'

export default function ItemCart ({ item }) {
  const { removeCart } = useShoppingCart()
  const showCounter = item.count > 1
  const handleRemove = () => removeCart(item)

  return (
    <div className='item-card'>
      <div className='item-card-left'>
        <img src={item.image} alt="imagen de ropa"/>
        {showCounter && <span className='item-card-left__count'>{item.count}</span>}
      </div>
      <div className='item-card-right'>
        <div className="item-card-right__title">{item.name}</div>
        <div className="item-card-right__desc">
          <span className='item-card-right__desc size'>Talla: {item.size.toUpperCase()}</span>
          <span className='item-card-right__desc price'>Precio: {item.price} €</span>
        </div>
      </div>
      <div className="item-card-close">
        <IoCloseSharp onClick={handleRemove}/>
      </div>
    </div>
  )
}
