import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'
import './NavBar.css'

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className="navbar">
        {/* Ícono hamburguesa */}
        <div className="navbar-left">
          <div
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <span></span><span></span><span></span>
          </div>
        </div>

        {/* LOGO CENTRAL */}
        <div className="navbar-center">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            JotaStore
          </Link>
        </div>

        {/* CARRITO */}
        <div className="navbar-right">
          <Link to="/cart" onClick={closeMenu}>
            <CartWidget />
          </Link>
        </div>

        {/* MENÚ DESPLEGABLE */}
        <div className={`menu-dropdown ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" className="nav-link" onClick={closeMenu}>Inicio</NavLink>
          <NavLink to="/productos" className="nav-link" onClick={closeMenu}>Todos los productos</NavLink>
          <NavLink to="/contacto" className="nav-link" onClick={closeMenu}>Contacto</NavLink>
        </div>
      </nav>

      <div className={`overlay ${menuOpen ? 'show' : ''}`} onClick={closeMenu}></div>
    </>
  )
}

export default NavBar
