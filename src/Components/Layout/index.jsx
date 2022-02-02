import Header from '../Header/Index'

export default function Layout ({ children, hideShoppingCart }) {
  return (
    <div>
      <Header hideShoppingCart={hideShoppingCart}/>
      {children}
    </div>
  )
}
