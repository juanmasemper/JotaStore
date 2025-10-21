import './Pages.css'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <section className="page">
      <h1>Carrito</h1>
      <p>Tu carrito está vacío 🛒</p>
      <p>Volver a la <Link to="/productos" className="nav-link"><span className="store-name">tienda</span></Link>.</p>
    </section>
  )
}

export default Cart
