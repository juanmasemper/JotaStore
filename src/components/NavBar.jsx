import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">JotaStore</Link>
      </div>

      <div className="navbar-center">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/productos" className="nav-link">Productos</Link>
        <Link to="/contacto" className="nav-link">Contacto</Link>
      </div>

      <div className="navbar-right">
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
