import './header.scss'
import { FiShoppingCart, FiSearch } from 'react-icons/fi'

export default function Header () {
  return (
    <div className='header'>
      <div className='header-container'>
        <div className='header-logo'>
          BAD CO.
        </div>
        <div className='header-desktop'>
          <ul className='header-desktop__list'>
            <li className='header-desktop__item-left'>Products</li>
            <li className='header-desktop__item-left'>About</li>
          </ul>
          <ul className='header-desktop__list'>
            <li className='header-desktop__item-right header-input-container'>
              <input type="text" className='header-input' placeholder='Type Search Here'/>
              <FiSearch className='header-input-icon'/>
            </li>
            <li className='header-desktop__item-right'>Login</li>
            <li className='header-desktop__item-right'>
              <FiShoppingCart className='header-cart'/>
            </li>
          </ul>
        </div>
        <div className='header-mobile'>
          X
        </div>
      </div>
    </div>
  )
}
