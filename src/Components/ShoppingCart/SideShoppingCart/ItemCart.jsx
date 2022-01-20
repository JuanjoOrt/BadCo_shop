import './ItemCard.scss'

export default function ItemCart ({ item }) {
  console.log(item)
  return <div className='item-card'>
    <div className='item-card-left'><img src={item.image} alt="imagen de ropa"/></div>
    <div className='item-card-right'>
      <div className="item-card-right__title">{item.name}</div>
      <div className="item-card-right__desc">
        <span className='item-card-right__desc size'>Talla: {item.size.toUpperCase()}</span>
        <span className='item-card-right__desc price'>Precio: {item.price}</span>
      </div>
    </div>
  </div>
}
