import Layout from '../../Components/Layout'
import Unicorn from '../../styles/assets/unicorn.png'
import './notFound.scss'

export default function NotFound () {
  return (
      <Layout>
          <div className='not-found'>
            <div className='not-found__unicorn'><img src={Unicorn} alt="imagen de unicornio"/></div>
            <div className='not-found__text'>¡Vaya! Parece que la pagina que buscas no se encuentra disponible!!</div>
          </div>
      </Layout>
  )
}
