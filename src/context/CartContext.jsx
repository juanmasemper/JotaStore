import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (product, quantity) => {
    const existing = cart.find((item) => item.id === product.id)
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      )
    } else {
      setCart([...cart, { ...product, quantity }])
    }
  }

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const clearCart = () => setCart([])

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, clearCart, total }}>
      {children}
    </CartContext.Provider>
  )
}
