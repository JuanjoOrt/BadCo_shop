import React, { useState } from 'react'

const GlobalContext = React.createContext({})

export function GlobalContextProvider ({ children }) {
  const [user, setUser] = useState(null)

  return <GlobalContext.Provider value={{ user, setUser }}>
		{children}
	</GlobalContext.Provider>
}

export default GlobalContext
