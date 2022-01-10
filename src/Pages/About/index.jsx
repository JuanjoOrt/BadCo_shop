import Layout from '../../Components/Layout'
import ImageModel from '../../styles/assets/about-model.webp'
import { GrGithub, GrTwitter, GrLinkedin } from 'react-icons/gr';
import './about.scss'

export default function About () {
  return (
    <Layout>
      <div className='about-container'>
        <div className='about-left'>
          <img src={ImageModel} alt='model image' className='about-image'/>
        </div>
        <div className='about-right'>
          <div className="about-content">
            <div className="about-content__title">
              OUR CREW
            </div>
            <div className="about-content__text">
              <div>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</div><br />
              <div>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. </div>
            </div>
            <div className="about-content__icons">
              <a href='https://github.com/JuanjoOrt' target='_blank' rel="noreferrer"><GrGithub className='about-content__icons-image'/></a>
              <a href='https://twitter.com/JuanjoOrt_' target='_blank' rel="noreferrer"><GrTwitter className='about-content__icons-image' /></a>
              <a href='https://www.linkedin.com/in/juanjoseortizgamez/' target='_blank' rel="noreferrer"><GrLinkedin className='about-content__icons-image' /></a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
