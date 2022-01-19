import './loginPanel.scss'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'
import { useState } from 'react'
import { useLogin } from '../../Hooks/useLogin'

export default function LoginPanel ({ user }) {
  const [active, setActive] = useState(false)
  const { signOut } = useLogin()

  return (
    <div className='login-panel'>
      <div className='login-panel-user' onClick={() => setActive(!active)}>
        {user}
        {active ? <BiUpArrow className='login-panel-user__icon'/> : <BiDownArrow className='login-panel-user__icon'/>}
      </div>
      { active &&
        <div className='login-panel-tab'>
          <div className='login-panel-tab__item'>Panel de control</div>
          <div className='login-panel-tab__hr'/>
          <div className='login-panel-tab__item' onClick={signOut}>Salir</div>
        </div>
      }
    </div>
  )
}
