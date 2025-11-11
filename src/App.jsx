import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Catálogo principal y categorías usan el mismo componente */}
          <Route path="/productos" element={<Productos />} />
          <Route path="/categoria/:categoryId" element={<Productos />} />

          {/* Detalle de producto */}
          <Route path="/item/:id" element={<ItemDetailContainer />} />

          {/* Contacto, carrito y página 404 */}
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
