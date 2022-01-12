import Layout from '../../Components/Layout'
import ImageModel from '../../styles/assets/login-model.webp'
import Google from '../../styles/assets/google.jpg'
import { GrFacebook } from 'react-icons/gr';
import './login.scss'

export default function Login () {
  return (
    <Layout>
      <div className='login-container'>
        <div className="login-left">
          <div className="login-title">Welcome</div>
          <div className="login-description">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. </div>
          <button className='login-button facebook'>
            <GrFacebook className='login-button-icon'/>
            <span>Sign up with Facebook</span>
          </button>
          <button className='login-button google'>
            <img src={Google} alt="Google icon"/>
            <span>Sign up with Google</span>
          </button>
        </div>
        <div className="login-right">
          <img src={ImageModel} alt='model image' className='login-image'/>
        </div>
      </div>
    </Layout>
  )
}
