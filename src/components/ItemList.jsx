import Item from './Item'

function ItemList({ productos = [] }) {
  if (!Array.isArray(productos)) {
    console.error('❌ Error: productos no es un array', productos)
    return <p className="loading">No se pudieron cargar los productos 😢</p>
  }

  if (productos.length === 0) {
    return <p className="loading">No hay productos para mostrar 😢</p>
  }

  return (
    <div className="item-list">
      {productos.map((prod) => (
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  )
}

export default ItemList
