import { Link } from "react-router-dom";
import "./ItemListContainer.css";

function Item({ product }) {
  return (
    <article className="item-card">
      <img src={product.img} alt={product.name} className="item-image" />
      <h3 className="item-title">{product.name}</h3>
      <p className="item-price">${product.price}</p>

      <div className="item-actions">
        <Link to={`/item/${product.id}`} className="add-btn">
          Ver detalle 🔍
        </Link>
      </div>
    </article>
  );
}

export default Item;
