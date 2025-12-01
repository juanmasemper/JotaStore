import { useParams, useNavigate } from "react-router-dom";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import CategoryFilter from "./CategoryFilter";
import "./CategoryFilter.css";
import { useProducts } from "../hooks/useProducts";
import { useCategories } from "../hooks/useCategories";

function ItemListContainer() {
  // Obtener parámetro de categoría desde la URL
  const { categoryId, category } = useParams();
  const navigate = useNavigate();
  const selectedCategory = categoryId || category || "";

  // Hook para obtener productos (con filtro opcional)
  const { items, loading } = useProducts(selectedCategory);

  // Hook para obtener categorías únicas
  const { categories, loading: categoriesLoading } = useCategories();

  const handleCategoryChange = (cat) => {
    if (cat) navigate(`/categoria/${cat}`);
    else navigate(`/`);
  };

  if (loading) return <p className="loading-text">Cargando productos...</p>;

  return (
    <section className="item-list-container">
      <h2 className="catalog-title">Catálogo de JotaStore</h2>

      <CategoryFilter
        categories={categories}
        value={selectedCategory}
        onChange={handleCategoryChange}
        loading={categoriesLoading}
      />

      {items.length === 0 ? (
        <p className="no-products">No hay productos para mostrar 😳</p>
      ) : (
        <ItemList items={items} />
      )}
    </section>
  );
}

export default ItemListContainer;
