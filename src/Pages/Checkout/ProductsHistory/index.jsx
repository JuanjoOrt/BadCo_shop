import './ProductsHistory.scss'
import { useContext } from 'react'
import CartContext from '../../../Context/ContextCart'
import HistoryItem from './HistoryItem'

export default function ProductsHistory () {
  const { items } = useContext(CartContext)
  console.log(items)

  return (
    <div className='products-history'>
      <div className="products-history__title">Articulos Seleccionados</div>
      <hr/>
      <div className="products-history__body">
        {items.map((item, index) => <HistoryItem key={index} product={item}/>)}
      </div>
      <hr/>
    </div>
  )
}
