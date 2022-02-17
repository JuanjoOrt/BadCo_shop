import './header.scss'
import { FiSearch } from 'react-icons/fi'
import { IoMenuOutline } from 'react-icons/io5'
import GlobalContext from '../../Context/Context'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import SideBar from '../SideBar'
import { useLogin } from '../../Hooks/useLogin'
import UseIsScrolled from '../../Hooks/useIsScrolled'
import useSearch from '../../Hooks/useSearch'
import LoginPanel from '../LoginPanel'
import ShoppingCart from '../ShoppingCart'
import SideShoppingCart from '../ShoppingCart/SideShoppingCart'

export default function Header ({ hideShoppingCart, controllScroll = false }) {
  const { user, setSearch } = useContext(GlobalContext)
  const [showSideBar, setShowSideBar] = useState(false)
  const { signIn } = useLogin()
  const { isScrolled } = UseIsScrolled()
  const { search, handleSearch, handleSubmit, navigate } = useSearch()
  const classScrolled = isScrolled ? 'scrolled' : ''

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleClickProducts = () => setSearch('')

  return (
    <>
      <div className={ `header ${classScrolled}` }>
        {
          isScrolled && controllScroll
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
                  <li className='header-desktop__item-left' onClick={handleClickProducts}><Link to='/products'>Products</Link></li>
                  <li className='header-desktop__item-left'><Link to='/about'>About</Link></li>
                </ul>
                <ul className='header-desktop__list'>
                  <li className='header-desktop__item-right header-input-container'>
                    <form onSubmit={handleSubmit}>
                      <input type="text" className='header-input' placeholder='Type Search Here' value={search} onChange={handleSearch}/>
                    </form>
                    <FiSearch className='header-input-icon' onClick={navigate}/>
                  </li>
                  <li className='header-desktop__item-right'>
                    {user
                      ? <LoginPanel user={user.profileObj.name} />
                      : <div onClick={signIn} className="cursor">Login</div>}
                  </li>
                  {
                    user && <li className='header-desktop__item-right'>
                      <ShoppingCart hideShoppingCart={hideShoppingCart}/>
                    </li>
                  }

                </ul>
              </div>
              <div className='header-mobile'>
                <ShoppingCart hideShoppingCart={hideShoppingCart}/>
                <IoMenuOutline className='header-menu' onClick={() => setShowSideBar(!showSideBar)}/>
              </div>
            </div>
        }
      </div>
      <SideBar visible={showSideBar} closeMenu={() => setShowSideBar(false)} clickProducts={handleClickProducts}/>
      <SideShoppingCart />
    </>

  )
}
