import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../data/products'
import ItemList from './ItemList'
import './ItemListContainer.css'

function ItemListContainer() {
  const { categoryId } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const fetchData = categoryId ? getProductsByCategory(categoryId) : getProducts()

    fetchData
      .then((res) => setProducts(res))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [categoryId])

  return (
    <section className="item-list-container">
      {loading ? (
        <p className="loading">Cargando productos...</p>
      ) : (
        <>
          <h2 className="catalogo-title">
            {categoryId ? `Categoría: ${categoryId}` : 'Catálogo de JotaStore'}
          </h2>
          <ItemList items={products} />
        </>
      )}
    </section>
  )
}

export default ItemListContainer
