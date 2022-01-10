import Header from '../Header/Index'

export default function Layout ({ children, sticky }) {
  return (
    <div>
      <Header sticky={sticky}/>
      {children}
    </div>
  )
}
