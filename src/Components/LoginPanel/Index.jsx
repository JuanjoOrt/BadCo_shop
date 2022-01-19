import './loginPanel.scss'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'
import { useEffect, useRef, useState } from 'react'
import { useLogin } from '../../Hooks/useLogin'

export default function LoginPanel ({ user }) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)
  const { signOut } = useLogin()

  return (
    <div className='login-panel'>
      <div className='login-panel-user' onClick={() => setActive(!active)} ref={ref}>
        {user}
        {active ? <BiUpArrow className='login-panel-user__icon'/> : <BiDownArrow className='login-panel-user__icon'/>}
      </div>
      {active && <Panel signOut={signOut} active={active} closePanel={() => setActive(false)} mainRef={ref}/>}
    </div>
  )
}

const Panel = ({ signOut, closePanel, mainRef }) => {
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside (event) {
      if (ref.current && !ref.current.contains(event.target) && !mainRef.current.contains(event.target)) {
        closePanel()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [ref])

  return (
    <div className='login-panel-tab' ref={ref}>
      {/*<div className='login-panel-tab__item'>Información</div>
        <div className='login-panel-tab__hr'/>*/}
      <div className='login-panel-tab__item' onClick={signOut}>Salir</div>
    </div>
  )
}
