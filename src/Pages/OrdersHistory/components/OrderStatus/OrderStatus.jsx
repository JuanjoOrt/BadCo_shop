import './styles.scss'
import StatusRow from './StatusRow/StatusRow'

export default function OrderStatus ({ status }) {
  return (
    <div className='order-status'>
      <StatusRow />
    </div>
  )
}
