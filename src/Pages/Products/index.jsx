import Layout from '../../Components/Layout'
import { useQuery } from 'react-query'
import { getProducts } from '../../Services/serviceProducts'
import { AiOutlineLoading } from 'react-icons/ai'
import './products.scss'

export default function Products () {
  const { isLoading, data } = useQuery('productsList', getProducts)

  return (
      <Layout>
        <div className='products-container'>
          {
            isLoading
              ? <AiOutlineLoading className='products-loading'/>
              : <div className='products-list'>
                  {data.map((product) => (
                    <div key={product.id} className='products-item'>
                      <img src={product.image} alt="imagen de ropa" className='products-item__image'/>
                      <div className='products-item__title'>{product.name}</div>
                      <div className='products-item__price'>{product.price}</div>
                    </div>
                  ))}
                </div>
          }
        </div>
      </Layout>
  )
}
