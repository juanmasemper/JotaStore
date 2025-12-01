import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';

/**
 * Hook para obtener categorías únicas de productos
 * @returns {Object} { categories, loading }
 */
export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const itemsCollection = collection(db, 'products');

    getDocs(itemsCollection)
      .then((snapshot) => {
        const cats = snapshot.docs
          .map((d) => d.data().category)
          .filter((c) => c !== undefined && c !== null && c !== '');

        const unique = Array.from(new Set(cats));
        setCategories(unique);
      })
      .catch((err) => {
        console.error('Error al obtener categorías:', err);
        setCategories([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading };
}
