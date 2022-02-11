import Layout from '../../Components/Layout'
import useGetOrders from '../../Hooks/useGetOrders'
import useChangeBackground from '../../Hooks/useChangeBackground'

export default function OrdersHistory () {
  useChangeBackground('#FBFBFB')
  const { orders } = useGetOrders()

  return <Layout>asd</Layout>
}
