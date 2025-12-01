import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebase';

/**
 * Hook para obtener productos de Firestore
 * @param {string} category - Categoría para filtrar (opcional)
 * @returns {Object} { items, loading }
 */
export function useProducts(category = '') {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const itemsCollection = collection(db, 'products');
    const q = category
      ? query(itemsCollection, where('category', '==', category))
      : itemsCollection;

    getDocs(q)
      .then((snapshot) => {
        const productsFromFB = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(productsFromFB);
      })
      .catch((err) => {
        console.error('Error al obtener productos:', err);
        setItems([]);
      })
      .finally(() => setLoading(false));
  }, [category]);

  return { items, loading };
}
