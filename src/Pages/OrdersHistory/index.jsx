import Layout from '../../Components/Layout'
import useGetOrders from '../../Hooks/useGetOrders'
import useChangeBackground from '../../Hooks/useChangeBackground'
import './orderHistory.scss'

export default function OrdersHistory () {
  useChangeBackground('#FBFBFB')
  const { orders } = useGetOrders()
  console.log(orders)
  return (
    <Layout>
      <div className='orders-history'>
        <div className='orders-history__title'>Historial de pedidos</div>
        <div className='orders-history__body'>
          asd
        </div>
      </div>
    </Layout>
  )
}
