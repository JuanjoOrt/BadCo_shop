import useGetProduct from '../../Hooks/useGetParams'
import Layout from '../../Components/Layout'
import ContextCart from '../../Context/ContextCart'
import { useContext, useEffect, useState } from 'react'
import SizeTag from '../../Components/SizeTag'
import NotFound from '../NotFound'
import useShoppingCart from '../../Hooks/useShoppingCart'
import './detail.scss'

export default function Detail () {
  const { setVisible, addButtonRef } = useContext(ContextCart)
  const { data, isError } = useGetProduct()
  const { addCart } = useShoppingCart()
  const [sizeSelected, setSizeSelected] = useState()
  useEffect(() => { window.scrollTo({ top: 0 }) }, [])

  const prepareToAdd = () => {
    console.log(data)
    const item = { id: data.id, price: data.price, size: sizeSelected, image: data.image, name: data.name }
    setVisible(true)
    addCart(item)
  }

  if (isError) return <NotFound />
  return (
      <Layout>
        <div className='detail'>
          {data && <>
            <div className='detail-gallery'>
              {data.imageGallery.map((image, index) => <div key={index} className='detail-gallery__content'><img src={image} alt='imagen de ropa' className='detail-gallery__image'/></div>)}
            </div>
            <div className='detail-container'>
              <div className='detail-content'>
                <div className='detail-content__title'>{data.name}</div>
                <div className='detail-content__description'>{data.description}</div>
                <div className='detail-content__size'>
                  {data.sizes_avaliable.map((size, index) => (
                    <SizeTag
                      key={index}
                      active={size === sizeSelected}
                      onClick={() => setSizeSelected(size)}>
                      {size}
                    </SizeTag>
                  ))}
                </div>
                <div className='detail-content__buy'>
                  <button className='detail-content__button' disabled={!sizeSelected} onClick={prepareToAdd} ref={addButtonRef}>Añadir al carrito</button>
                </div>
              </div>
            </div>
          </>}
        </div>
      </Layout>
  )
}
