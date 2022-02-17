import { getOrders } from '../Services/serviceOrders'
import { useQuery } from 'react-query'
import { useContext, useEffect, useState } from 'react'
import GlobalContext from '../Context/Context'

export default function useGetOrders () {
  const { data } = useQuery('ordersList', getOrders)
  const { user } = useContext(GlobalContext)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if (data && user) {
      setOrders(data?.filter(order => order.userMail === user?.profileObj.email))
    }
  }, [data, user])

  return { orders }
}
