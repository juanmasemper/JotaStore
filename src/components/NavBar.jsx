import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import './NavBar.css'

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      {/* Navbar*/}
      <nav className="navbar">
        {/* Menu hamburguesa */}
        <div className="navbar-left">
          <div
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Logo */}
        <div className="navbar-center">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            JotaStore
          </Link>
        </div>

        {/* Carrito */}
        <div className="navbar-right">
          <Link to="/cart" onClick={closeMenu}>
            <CartWidget />
          </Link>
        </div>

        {/* Menú desplegable */}
        <div className={`menu-dropdown ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Inicio
          </Link>
          <Link to="/productos" className="nav-link" onClick={closeMenu}>
            Productos
          </Link>
          <Link to="/contacto" className="nav-link" onClick={closeMenu}>
            Contacto
          </Link>
        </div>
      </nav>

      {/* Overlay con control de eventos */}
      <div
        className={`overlay ${menuOpen ? 'show' : ''}`}
        onClick={closeMenu}
      ></div>
    </>
  )
}

export default NavBar
