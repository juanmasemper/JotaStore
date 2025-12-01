import ItemCount from './ItemCount'
import './ItemListContainer.css'
import { useCart } from '../context/CartContext'
import Swal from 'sweetalert2'
import 'animate.css'
import { Link } from 'react-router-dom'

function ItemDetail({ product }) {
  const { addToCart } = useCart()

  const handleAddToCart = (quantity) => {
    console.log('🟣 handleAddToCart ejecutado con', quantity)

    // 🔥 Ahora addToCart devuelve true o false según si se pudo agregar
    const added = addToCart(product, quantity)

    // ❌ Si no se pudo agregar, NO mostramos alerta de éxito
    if (!added) return

    // ✔️ Solo mostramos alerta si se agregó correctamente
    Swal.fire({
      title: '🛒 Producto agregado',
      html: `
        <strong>${product.name}</strong><br>
        Cantidad: <b>${quantity}</b> unidad${quantity > 1 ? 'es' : ''}.
      `,
      icon: 'success',
      background: '#1e1e2e',
      color: '#fff',
      confirmButtonColor: '#cba6f7',
      confirmButtonText: 'Perfecto',
      showClass: { popup: 'animate__animated animate__fadeInDown' },
      hideClass: { popup: 'animate__animated animate__fadeOutUp' },
    })
  }

  return (
    <div className="item-detail">
      <img src={product.img} alt={product.name} className="item-detail-image" />
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="item-detail-price">${product.price}</p>

        <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />

        <div className="back-container">
          <Link to="/productos" className="back-btn">
            ← Volver al catálogo
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
