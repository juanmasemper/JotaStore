import { useState } from 'react'
import './ItemListContainer.css'

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial)

  const handleAdd = () => {
    console.log('✅ Botón Agregar clickeado. Cantidad:', count)
    if (onAdd) {
      onAdd(count)
    } else {
      console.warn('⚠️ No se recibió la función onAdd en ItemCount')
    }
  }

  return (
    <div className="item-count">
      <div className="controls">
        <button onClick={() => setCount(count - 1)} disabled={count <= 1}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)} disabled={count >= stock}>+</button>
      </div>
      <button className="add-btn" onClick={handleAdd}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount
