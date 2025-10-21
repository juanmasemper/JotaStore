import './ItemListContainer.css'

function ItemListContainer({ greeting, storeName }) {
  return (
    <section className="item-list-container">
      <h1>{greeting} <span className="store-name">{storeName}</span> 👋</h1>
      <p>Tu e-commerce de confianza para encontrar todo lo que necesitás.</p>
    </section>
  )
}

export default ItemListContainer
