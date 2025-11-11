import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../data/products'
import ItemList from '../components/ItemList'
import './pages.css'

function Productos() {
  const { categoryId } = useParams()
  const navigate = useNavigate()
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('')

  // Sincroniza la categoría con la URL
  useEffect(() => {
    if (categoryId) setSelectedCategory(categoryId)
    else setSelectedCategory('')
  }, [categoryId])

  // Carga productos filtrados o todos
  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const data = selectedCategory
        ? await getProductsByCategory(selectedCategory)
        : await getProducts()
      setProductos(data)
      setLoading(false)
    }
    fetchData()
  }, [selectedCategory])

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    if (category) navigate(`/categoria/${category}`)
    else navigate('/productos')
  }

  const categories = [
    { id: '', label: 'Todos' },
    { id: 'remeras', label: 'Remeras' },
    { id: 'buzos', label: 'Buzos' },
    { id: 'accesorios', label: 'Accesorios' },
  ]

  return (
    <div className="item-list-container">
      <h1 className="page-title">
        Catálogo de <span className="brand">JotaStore</span>
      </h1>

      {/* === BOTONES DE FILTRO === */}
      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => handleCategoryClick(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* === LISTADO DE PRODUCTOS === */}
      {loading ? (
        <p className="loading">Cargando productos...</p>
      ) : productos.length > 0 ? (
        <ItemList productos={productos} />
      ) : (
        <p className="loading">No hay productos en esta categoría 😢</p>
      )}
    </div>
  )
}

export default Productos
