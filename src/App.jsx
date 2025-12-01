import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

import Home from './pages/Home'
import Contacto from './pages/Contacto'
import Cart from './pages/Cart'
import Checkout from "./pages/Checkout";
import NotFound from './pages/NotFound'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          {/* Home */}
          <Route path="/home" element={<Home />} />

          {/* Catálogo principal */}
          <Route path="/" element={<ItemListContainer />} />

          {/* Redirección correcta según rúbrica */}
          <Route path="/productos" element={<Navigate to="/" />} />

          {/* Categorías */}
          <Route path="/categoria/:categoryId" element={<ItemListContainer />} />

          {/* Detalle */}
          <Route path="/item/:id" element={<ItemDetailContainer />} />

          {/* Contacto + Carrito */}
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart />} />

          {/* Checkout */}
          <Route path="/checkout" element={<Checkout />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
