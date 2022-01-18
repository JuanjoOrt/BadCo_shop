import './sidebar.scss'
import { IoCloseSharp } from 'react-icons/io5'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useLogin } from '../../Hooks/useLogin'
import { AiOutlineLoading } from 'react-icons/ai'
import { useContext } from 'react'
import GlobalContext from '../../Context/Context'
import useSearch from '../../Hooks/useSearch'

export default function SideBar ({ visible, closeMenu }) {
  const visibleClass = visible ? 'sidebar-visible' : 'sidebar-no-visible'
  const { user } = useContext(GlobalContext)
  const { search, handleSearch, handleSubmit, navigate } = useSearch()
  const { signIn, loaded } = useLogin()

  return (
    <div className={`sidebar ${visibleClass}`}>
      <div className='sidebar-header'>
          <div className='sidebar-header__logo'><Link to='/' className='sidebar-link'>BAD CO.</Link></div>
          <IoCloseSharp className='sidebar-header__icon' onClick={closeMenu}/>
      </div>
      <div className="sidebar-body">
        <div>
          <div className="sidebar-item"><Link to='/products' className='sidebar-link'>Products</Link></div>
          <div className="sidebar-item"><Link to='/about' className='sidebar-link'>About</Link></div>
        </div>
        <div>
          <div className='sidebar-input-container'>
            <form onSubmit={handleSubmit}>
              <input type="text" className='sidebar-input' placeholder='Type Search Here' value={search} onChange={handleSearch}/>
            </form>
            <FiSearch className='sidebar-input-icon' onClick={navigate}/>
          </div>
          {
            loaded
              ? user
                ? <Link to='/'><div className='sidebar-item'>{user.profileObj.name}</div></Link>
                : <div onClick={signIn} className='sidebar-item cursor'>Login</div>
              : <AiOutlineLoading className='header-loading'/>
          }
        </div>
      </div>
    </div>
  )
}
