import Header from '../Header/Index'

export default function Layout ({ children, hideShoppingCart, controllScroll }) {
  return (
    <div>
      <Header hideShoppingCart={hideShoppingCart} controllScroll={controllScroll}/>
      {children}
    </div>
  )
}
