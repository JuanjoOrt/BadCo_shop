import React, { useRef, useState } from 'react'

const CartContext = React.createContext({})

export function CartContextProvider ({ children }) {
  const [visible, setVisible] = useState(false)
  const [items, setItems] = useState([{
    count: 1,
    id: '10001',
    image: 'https://i.imgur.com/r24lZzB.jpg',
    name: 'Sudadera Capucha Washed Fire Tiger',
    price: 75.9,
    size: 'm'
  }])
  const addButtonRef = useRef()

  return <CartContext.Provider value={{ visible, setVisible, items, setItems, addButtonRef }}>
    {children}
  </CartContext.Provider>
}

export default CartContext
