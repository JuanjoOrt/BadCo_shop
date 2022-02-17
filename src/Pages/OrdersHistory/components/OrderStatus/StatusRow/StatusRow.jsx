import SphereStatus from '../SphereStatus/SphereStatus'
import './styles.scss'

export default function StatusRow ({ status = '', line = false, title, date }) {
  return (
    <div className='status-row'>
      <div>
        <SphereStatus type={status} line={line}/>
      </div>
      <div className='status-row__details'>
        <span>{title}</span>
        <span className='status-row__details-date'>{date}</span>
      </div>
    </div>
  )
}
