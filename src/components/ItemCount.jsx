import { useState } from 'react'
import './ItemListContainer.css'

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial)

  const handleAdd = () => {
    if (onAdd) onAdd(count)
  }

  const decrease = () => {
    if (count > 1) setCount(count - 1)
  }

  const increase = () => {
    if (count < stock) setCount(count + 1)
  }

  return (
    <div className="item-count">
      <div className="controls">
        <button onClick={decrease} disabled={count <= 1}>-</button>
        <span>{count}</span>
        <button onClick={increase} disabled={count >= stock}>+</button>
      </div>

      <button className="add-btn" onClick={handleAdd}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount
