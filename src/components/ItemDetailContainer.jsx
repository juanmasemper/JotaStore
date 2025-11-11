import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../data/products'
import ItemDetail from '../components/ItemDetail'
import './ItemDetailContainer.css'

function ItemDetailContainer() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getProductById(id)
      .then((res) => setProduct(res))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p className="loading">Cargando producto...</p>
  if (!product) return <p className="loading">Producto no encontrado.</p>

  // ✅ Ahora renderizamos el componente ItemDetail, pasándole el producto
  return (
    <section className="item-detail-container">
      <ItemDetail product={product} />
    </section>
  )
}

export default ItemDetailContainer
