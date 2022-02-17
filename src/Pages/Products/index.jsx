import Layout from '../../Components/Layout'
import { AiOutlineLoading } from 'react-icons/ai'
import './products.scss'
import { Link } from 'react-router-dom'
import useGetProducts from '../../Hooks/useGetProducts'

export default function Products () {
  const { data, isLoading } = useGetProducts()

  return (
      <Layout controllScroll>
        <div className='products-container'>
          {
            isLoading
              ? <AiOutlineLoading className='products-loading'/>
              : <div className='products-list'>
                  {data.map((product) => (
                    <Link to={`/detail/${product.id}`} key={product.id} className='products-item'>
                      <img src={product.image} alt="imagen de ropa" className='products-item__image'/>
                      <div className='products-item__title'>{product.name}</div>
                      <div className='products-item__price'>{product.price} €</div>
                    </Link>
                  ))}
                </div>
          }
        </div>
      </Layout>
  )
}
