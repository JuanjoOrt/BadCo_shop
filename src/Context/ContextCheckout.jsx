import React, { useState } from 'react'

const ContextCheckout = React.createContext({})

export function ContextCheckoutProvider ({ children }) {
  const [info, setInfo] = useState()

  return <ContextCheckout.Provider value={{ info, setInfo }}>
    {children}
  </ContextCheckout.Provider>
}

export default ContextCheckout
