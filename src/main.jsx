import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { GlobalContextProvider } from './Context/Context'
import { CartContextProvider } from './Context/ContextCart'

const queryClient = new QueryClient()

const composeProviders = (...providers) => ({ children }) => {
  return providers.reduceRight(
    (child, Provider) => <Provider>{child}</Provider>,
    children
  )
}

const Providers = composeProviders(
  BrowserRouter,
  GlobalContextProvider,
  CartContextProvider
)

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
)
