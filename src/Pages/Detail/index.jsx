import useGetProduct from '../../Hooks/useGetParams'
import Layout from '../../Components/Layout'
import './detail.scss'
import { useEffect, useState } from 'react'
import SizeTag from '../../Components/SizeTag'

export default function Detail () {
  const { data, isError } = useGetProduct()
  const [sizeSelected, setSizeSelected] = useState()
  useEffect(() => { window.scrollTo({ top: 0 }) }, [])

  return (
      <Layout>
        <div className='detail'>
          {isError && <div>Esto es una pagina erronea</div>}
          {data && <>
            <div className='detail-gallery'>
              {data.imageGallery.map((image, index) => <img src={image} key={index} alt='imagen de ropa'/>)}
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
                  <button className='detail-content__button' disabled={!sizeSelected}>Añadir al carrito</button>
                </div>
              </div>
            </div>
          </>}
        </div>
      </Layout>
  )
}
