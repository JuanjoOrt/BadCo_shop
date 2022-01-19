import './loginPanel.scss'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'
import { useEffect, useRef, useState } from 'react'
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
      <Panel active={active} signOut={signOut} onClick={() => setActive(false)}/>
    </div>
  )
}

const Panel = ({ active, signOut, onClick }) => {
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = () => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClick()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return active &&
  <div className='login-panel-tab' ref={ref}>
    <div className='login-panel-tab__item'>Panel de control</div>
    <div className='login-panel-tab__hr'/>
    <div className='login-panel-tab__item' onClick={signOut}>Salir</div>
  </div>
}
