import React from 'react'
import './CategoryFilter.css'

/**
 * Componente dropdown para filtrar productos por categoría
 * Muestra spinner mientras carga las categorías y opción "Todos" por defecto
 * 
 * @component
 * @param {Object} props
 * @param {Array<string>} props.categories - Lista de categorías únicas disponibles
 * @param {string} props.value - Categoría actualmente seleccionada
 * @param {Function} props.onChange - Callback(categoryValue) al cambiar de categoría
 * @param {boolean} props.loading - Estado de carga de categorías (muestra spinner si true)
 * @returns {JSX.Element} Dropdown estilizado con icon de caret
 * @example
 *   <CategoryFilter
 *     categories={['Electrónica', 'Ropa']}
 *     value='Electrónica'
 *     onChange={(cat) => navigate(`/categoria/${cat}`)}
 *     loading={false}
 *   />
 */
function CategoryFilter({ categories = [], value = '', onChange, loading = false }) {
  return (
    <div className="category-filter">
      <label className="category-label">Filtrar por:</label>

      <div className={`select-wrap ${loading ? 'loading' : ''}`}>
        <select
          className="category-select"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={loading}
          aria-label="Filtrar productos por categoría"
        >
          {loading ? (
            <option value="">Cargando...</option>
          ) : (
            <>
              <option value="">Todos</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </>
          )}
        </select>
      </div>
    </div>
  )
}

export default CategoryFilter
