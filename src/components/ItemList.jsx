import Item from './Item'

function ItemList({ items = [] }) {
  if (!Array.isArray(items)) {
    console.error('❌ Error: items no es un array', items)
    return <p className="loading">No se pudieron cargar los productos 😢</p>
  }

  if (items.length === 0) {
    return <p className="loading">No hay productos para mostrar 😢</p>
  }

  return (
    <div className="item-list">
      {items.map((prod) => (
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  )
}

export default ItemList
