import Layout from '../../Components/Layout'
import useGetOrders from '../../Hooks/useGetOrders'
import useChangeBackground from '../../Hooks/useChangeBackground'
import './orderHistory.scss'
import OrderDetail from './components/OrderDetail/OrderDetail'

export default function OrdersHistory () {
  useChangeBackground('#FBFBFB')
  const { orders } = useGetOrders()
  return (
    <Layout>
      <div className='orders-history'>
        <div className='orders-history__title'>Historial de pedidos</div>
        <div className='orders-history__body'>
          {orders.map(order => <OrderDetail key={order.id} order={order}/>)}
        </div>
      </div>
    </Layout>
  )
}
