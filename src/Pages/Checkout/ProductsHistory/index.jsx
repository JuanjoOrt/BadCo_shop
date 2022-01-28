import './ProductsHistory.scss'
import { useContext } from 'react'
import CartContext from '../../../Context/ContextCart'
import HistoryItem from './HistoryItem'
import useShoppingCart from '../../../Hooks/useShoppingCart'

export default function ProductsHistory () {
  const { items } = useContext(CartContext)
  const { getArticlesPrice } = useShoppingCart()

  return (
    <div className='products-history'>
      <div className='products-history__title'>Articulos Seleccionados</div>
      <hr/>
      <div className='products-history__body'>
        {items.map((item, index) => <HistoryItem key={index} product={item}/>)}
      </div>
      <hr/>
      <div className='products-history-details'>
        <div className='products-history-details__content'>
          <div className='products-history-details__item'>
            <span>Artículos:</span>
            <span>{getArticlesPrice()} €</span>
          </div>
          <div className='products-history-details__item'>
            <span>Gastos de envío:</span>
            <span>2.99 €</span>
          </div>
          <div className='products-history-details__item-bold'>
            <span>TOTAL:</span>
            <span>{getArticlesPrice() + 2.99} €</span>
          </div>
        </div>
      </div>
    </div>
  )
}
