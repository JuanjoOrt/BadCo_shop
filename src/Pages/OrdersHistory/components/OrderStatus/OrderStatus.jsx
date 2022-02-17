import './styles.scss'
import StatusRow from './StatusRow/StatusRow'
import { DateTime } from 'luxon'

export default function OrderStatus ({ status, date }) {
  const actualDate = DateTime.fromISO(date).setLocale('es').toFormat('dd MMMM yyyy')
  const datePlusTwo = DateTime.fromISO(date).plus({ days: 2 }).setLocale('es').toFormat('dd MMMM yyyy')

  return (
    <div className='order-status'>
      {status === 1 &&
        <>
          <StatusRow date={datePlusTwo} title='Entregado' status='' line/>
          <StatusRow date={actualDate} title='Enviado' status='' line/>
          <StatusRow date={actualDate} title='Procesando' status='' line/>
          <StatusRow date={actualDate} title='Pedido realizado' status='actual'/>
        </>
      }
      {status === 2 &&
        <>
          <StatusRow date={datePlusTwo} title='Entregado' status='' line/>
          <StatusRow date={actualDate} title='Enviado' status='' line/>
          <StatusRow date={actualDate} title='Procesando' status='actual' line/>
          <StatusRow date={actualDate} title='Pedido realizado' status='done'/>
        </>
      }
      {status === 3 &&
        <>
          <StatusRow date={datePlusTwo} title='Entregado' status='' line/>
          <StatusRow date={actualDate} title='Enviado' status='actual' line/>
          <StatusRow date={actualDate} title='Procesando' status='done' line/>
          <StatusRow date={actualDate} title='Pedido realizado' status='done'/>
        </>
      }
      {status === 4 &&
        <>
          <StatusRow date={datePlusTwo} title='Entregado' status='actual' line/>
          <StatusRow date={actualDate} title='Enviado' status='done' line/>
          <StatusRow date={actualDate} title='Procesando' status='done' line/>
          <StatusRow date={actualDate} title='Pedido realizado' status='done'/>
        </>
      }
    </div>
  )
}
