import './header.scss'
import { FiShoppingCart, FiSearch } from 'react-icons/fi'
import { IoMenuOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import SideBar from '../SideBar'

export default function Header ({ sticky = false }) {
  const [showSideBar, setShowSideBar] = useState(false)

  return (
    <>
      <div className={ `header ${sticky ? 'header-sticky' : 'header-absolute'}` }>
        <div className='header-container'>
          <div className='header-logo'>
            <Link to='/'>BAD CO.</Link>
          </div>
          <div className='header-desktop'>
            <ul className='header-desktop__list'>
              <li className='header-desktop__item-left'>Products</li>
              <Link to='/about'><li className='header-desktop__item-left'>About</li></Link>
            </ul>
            <ul className='header-desktop__list'>
              <li className='header-desktop__item-right header-input-container'>
                <input type="text" className='header-input' placeholder='Type Search Here'/>
                <FiSearch className='header-input-icon'/>
              </li>
              <Link to='/login'><li className='header-desktop__item-right'>Login</li></Link>
              <li className='header-desktop__item-right'>
                <FiShoppingCart className='header-cart'/>
              </li>
            </ul>
          </div>
          <div className='header-mobile'>
            <IoMenuOutline className='header-menu' onClick={() => setShowSideBar(!showSideBar)}/>
          </div>
        </div>
      </div>
      <SideBar visible={showSideBar} closeMenu={() => setShowSideBar(false)}/>
    </>

  )
}
