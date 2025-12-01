import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

/**
 * Contexto para gestionar el carrito de compras en toda la aplicación
 * Proporciona acceso al estado del carrito y métodos para manipularlo
 */
const CartContext = createContext();

/**
 * Hook para acceder al carrito de compras desde cualquier componente
 * @returns {Object} Métodos y estado del carrito
 *   - cart: Array de items en el carrito
 *   - addToCart: (product, quantity) => boolean
 *   - removeItem: (id) => void
 *   - clearCart: () => void
 *   - total: number
 * @example
 *   const { cart, addToCart, total } = useCart();
 */
export const useCart = () => useContext(CartContext);

/**
 * Proveedor del contexto de carrito
 * Envuelve la aplicación para proporcionar acceso al carrito desde cualquier componente
 * @param {Object} props
 * @param {ReactNode} props.children - Componentes hijos que tendrán acceso al carrito
 * @returns {JSX.Element} Provider con el contexto del carrito
 */
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  /**
   * Agrega un producto al carrito o incrementa su cantidad
   * Valida que la cantidad total no supere el stock disponible
   * @param {Object} product - Objeto producto con id, name, price, stock, etc.
   * @param {number} quantity - Cantidad a agregar
   * @returns {boolean} true si se agregó exitosamente, false si supera stock
   */
  const addToCart = (product, quantity) => {
    const existing = cart.find((item) => item.id === product.id);
    const totalRequested = (existing?.quantity || 0) + quantity;

    // ❌ Si supera el stock → mostrar alerta y NO agregar
    if (totalRequested > product.stock) {
      Swal.fire({
        title: "⚠️ Stock insuficiente",
        html: `
          <strong>${product.name}</strong><br>
          Stock disponible: <b>${product.stock}</b><br>
          Intentaste agregar: <b>${totalRequested}</b>
        `,
        icon: "warning",
        background: "#1e1e2e",
        color: "#fff",
        confirmButtonColor: "#cba6f7",
        confirmButtonText: "Entendido",
      });
      return false; // ❌ IMPORTANTE
    }

    // ✔ Si no supera el stock → agregar normalmente
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: totalRequested }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }

    return true; // ✔ Producto agregado con éxito
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeItem, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
