import { FiAlertCircle } from 'react-icons/fi'
import './styles.scss'

export default function Alert ({ children = '' }) {
  return (
    <div className='Alert'>
      <div><FiAlertCircle /></div>
      <div className='Alert-text'>{children}</div>
    </div>
  )
}
