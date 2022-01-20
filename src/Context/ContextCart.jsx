import React, { useState } from 'react'

const CartContext = React.createContext({})

export function CartContextProvider ({ children }) {
  const [visible, setVisible] = useState(false)
  const [items, setItems] = useState([])

  return <CartContext.Provider value={{ visible, setVisible, items, setItems }}>
    {children}
  </CartContext.Provider>
}

export default CartContext
