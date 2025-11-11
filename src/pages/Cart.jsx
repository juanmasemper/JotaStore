import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import './pages.css'

function Cart() {
  const { cart, removeItem, clearCart } = useCart()

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío 😢</h2>
        <Link to="/productos" className="back-btn">Volver a productos</Link>
      </div>
    )
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  // Eliminar producto individual
  const handleRemove = (item) => {
    Swal.fire({
      title: '¿Eliminar producto?',
      text: `Se eliminará "${item.name}" del carrito.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      background: '#1e1e2e',
      color: '#fff',
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(item.id)
        Swal.fire({
          title: 'Eliminado ✅',
          text: `"${item.name}" fue eliminado del carrito.`,
          icon: 'success',
          confirmButtonColor: '#cba6f7',
          background: '#1e1e2e',
          color: '#fff',
        })
      }
    })
  }

  // Vaciar todo el carrito
  const handleClearCart = () => {
    Swal.fire({
      title: '¿Vaciar carrito?',
      text: 'Se eliminarán todos los productos.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, vaciar',
      cancelButtonText: 'Cancelar',
      background: '#1e1e2e',
      color: '#fff',
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire({
          title: 'Carrito vacío 🛒',
          text: 'Todos los productos fueron eliminados.',
          icon: 'success',
          confirmButtonColor: '#cba6f7',
          background: '#1e1e2e',
          color: '#fff',
        })
      }
    })
  }

  // Finalizar compra
  const handleFinishPurchase = () => {
    Swal.fire({
      title: '¡Compra confirmada! 🎉',
      text: 'Gracias por tu compra. Te enviaremos los detalles por correo.',
      icon: 'success',
      confirmButtonColor: '#cba6f7',
      background: '#1e1e2e',
      color: '#fff',
    })
    clearCart()
  }

  return (
    <div className="cart-page">
      <h2>
        🛍️ Tu carrito
      </h2>

      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} />
            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${item.price}</p>
              <button onClick={() => handleRemove(item)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>

      <h3 className="cart-total">Total: ${total}</h3>

      <div className="cart-actions">
        <button onClick={handleClearCart} className="clear-btn">Vaciar carrito</button>
        <Link to="/productos" className="back-btn">Seguir comprando</Link>
        <button onClick={handleFinishPurchase} className="buy-btn">Finalizar compra</button>
      </div>
    </div>
  )
}

export default Cart
