import { useContext } from 'react'
import ContextCart from '../Context/ContextCart'

export default function useShoppingCart () {
  const { items, setItems } = useContext(ContextCart)

  const addCart = (item) => {
    const itemFounded = items.find(itemDB => item.id === itemDB.id && item.size === itemDB.size)
    if (itemFounded) {
      itemFounded.count = itemFounded.count + 1
    } else {
      item.count = 0
      setItems(prevItems => [...prevItems, item])
    }

    console.log(items)
  }

  return { addCart }
}
