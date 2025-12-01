import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", id);

    getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItem({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.log("Producto no encontrado");
        }
      })
      .catch((err) => console.log("Error al obtener producto:", err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <section className="item-detail-container">
      {loading ? (
        <p className="loading">Cargando producto...</p>
      ) : (
        item && <ItemDetail product={item} />
      )}
    </section>
  );
}

export default ItemDetailContainer;
