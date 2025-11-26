import { useCart } from '../context/CartContext'
import './CartWidget.css'

function CartWidget() {
  const { cart } = useCart()

  // Sumar todas las cantidades
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div className="cart-widget">
      🛒
      {totalItems > 0 && (
        <span className="cart-count">{totalItems}</span>
      )}
    </div>
  )
}

export default CartWidget
