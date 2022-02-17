import Layout from '../../Components/Layout'
import useGetOrders from '../../Hooks/useGetOrders'
import useChangeBackground from '../../Hooks/useChangeBackground'
import './orderHistory.scss'
import OrderDetail from './components/OrderDetail/OrderDetail'

export default function OrdersHistory () {
  useChangeBackground('#FBFBFB')
  const { orders, isLoading } = useGetOrders()
  const emptyOrders = orders?.length === 0

  if (isLoading) {
    return <Layout />
  }

  return (
    <Layout>
      { orders &&
        <div className='orders-history'>
          {
            emptyOrders
              ? <div className='orders-history__title'>No hay pedidos realizados...</div>
              : <>
                <div className='orders-history__title'>Historial de pedidos</div>
                <div className='orders-history__body'>
                  {orders.map(order => <OrderDetail key={order.id} order={order}/>)}
                </div>
              </>
          }

        </div>
      }
    </Layout>
  )
}
