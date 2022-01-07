import Header from '../Header/Index'

export default function Layout ({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
