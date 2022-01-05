import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { GlobalContextProvider } from './Context/Context'

const composeProviders = (...providers) => ({ children }) => {
  return providers.reduceRight(
    (child, Provider) => <Provider>{child}</Provider>,
    children
  )
}

const Providers = composeProviders(
  BrowserRouter,
  GlobalContextProvider
)

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
)
