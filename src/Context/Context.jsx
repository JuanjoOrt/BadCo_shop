import React, { useState } from 'react'

const GlobalContext = React.createContext({})

export function GlobalContextProvider ({ children }) {
  const [user, setUser] = useState(null)
  const [search, setSearch] = useState('')

  return <GlobalContext.Provider value={{ user, setUser, search, setSearch }}>
		{children}
	</GlobalContext.Provider>
}

export default GlobalContext
