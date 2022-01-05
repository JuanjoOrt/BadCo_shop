import React, { useState } from 'react'

const GlobalContext = React.createContext({})

export function GlobalContextProvider ({ children }) {
  const [user, setUser] = useState(1)

  return <GlobalContext.Provider value={{ user, setUser }}>
		{children}
	</GlobalContext.Provider>
}

export default GlobalContext
