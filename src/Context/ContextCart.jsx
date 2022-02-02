import React, { useRef, useState } from 'react'

const CartContext = React.createContext({})

export function CartContextProvider ({ children }) {
  const [visible, setVisible] = useState(false)
  const [items, setItems] = useState([])
  const addButtonRef = useRef()

  return <CartContext.Provider value={{ visible, setVisible, items, setItems, addButtonRef }}>
    {children}
  </CartContext.Provider>
}

export default CartContext
