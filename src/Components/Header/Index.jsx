import './header.scss'
import { FiShoppingCart, FiSearch } from 'react-icons/fi'
import { IoMenuOutline } from 'react-icons/io5'
import GlobalContext from '../../Context/Context'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import SideBar from '../SideBar'
import { useLogin } from '../../Hooks/useLogin'
import UseIsScrolled from '../../Hooks/useIsScrolled'

export default function Header () {
  const { user } = useContext(GlobalContext)
  const [showSideBar, setShowSideBar] = useState(false)
  const { signIn } = useLogin()
  const { isScrolled } = UseIsScrolled()
  const classScrolled = isScrolled ? 'scrolled' : ''

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div className={ `header ${classScrolled}` }>
        {
          isScrolled
            ? <div className='header-container'>
                <div className='header-logo'>
                  <div onClick={scrollToTop} className='cursor'>BAD CO.</div>
                </div>
              </div>
            : <div className='header-container'>
              <div className='header-logo'>
                <Link to='/'>BAD CO.</Link>
              </div>
              <div className='header-desktop'>
                <ul className='header-desktop__list'>
                  <Link to='/products'><li className='header-desktop__item-left'>Products</li></Link>
                  <Link to='/about'><li className='header-desktop__item-left'>About</li></Link>
                </ul>
                <ul className='header-desktop__list'>
                  <li className='header-desktop__item-right header-input-container'>
                    <input type="text" className='header-input' placeholder='Type Search Here'/>
                    <FiSearch className='header-input-icon'/>
                  </li>
                  <li className='header-desktop__item-right'>
                    {user
                      ? <div>{user.profileObj.name}</div>
                      : <div onClick={signIn} className="cursor">Login</div>}
                  </li>
                  {
                    user && <li className='header-desktop__item-right'>
                      <FiShoppingCart className='header-cart'/>
                    </li>
                  }

                </ul>
              </div>
              <div className='header-mobile'>
                <IoMenuOutline className='header-menu' onClick={() => setShowSideBar(!showSideBar)}/>
              </div>
            </div>
        }
      </div>
      <SideBar visible={showSideBar} closeMenu={() => setShowSideBar(false)} />
    </>

  )
}
