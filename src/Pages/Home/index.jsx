import './home.scss'
import WomanImage from '../../styles/assets/home-woman-model.webp'
import useChangeBackground from '../../Hooks/useChangeBackground'
import Layout from '../../Components/Layout'

export default function Home () {
  useChangeBackground('#978DD0')

  return (
    <Layout>
      <div className='home-container'>
        <div className='home-desktop'>
          <div className='home-title'>BAD CO</div>
          <img src={WomanImage} alt='Modelo femenino' className='home-image'/>
        </div>
        <div className='home-mobile'>
          <div className='home-title'>
            <div>BAD</div>
            <div>CO</div>
          </div>
          <img src={WomanImage} alt='Modelo femenino' className='home-image'/>
        </div>
      </div>
    </Layout>
  )
}
