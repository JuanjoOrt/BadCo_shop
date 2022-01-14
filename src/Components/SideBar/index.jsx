import './sidebar.scss'
import { IoCloseSharp } from 'react-icons/io5'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useLogin } from '../../Hooks/useLogin'

export default function SideBar ({ visible, closeMenu }) {
  const visibleClass = visible ? 'sidebar-visible' : 'sidebar-no-visible'
  const { signIn } = useLogin()

  return (
    <div className={`sidebar ${visibleClass}`}>
      <div className='sidebar-header'>
          <div className='sidebar-header__logo'><Link to='/' className='sidebar-link'>BAD CO.</Link></div>
          <IoCloseSharp className='sidebar-header__icon' onClick={closeMenu}/>
      </div>
      <div className="sidebar-body">
        <div>
          <div className="sidebar-item">Products</div>
          <div className="sidebar-item"><Link to='/about' className='sidebar-link'>About</Link></div>
        </div>
        <div>
          <div className='sidebar-input-container'>
            <input type="text" className='sidebar-input' placeholder='Type Search Here'/>
            <FiSearch className='sidebar-input-icon'/>
          </div>
          <div className="sidebar-item cursor" onClick={signIn}>Login</div>
        </div>
      </div>
    </div>
  )
}
