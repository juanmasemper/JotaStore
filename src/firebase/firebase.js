import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAJTUrNN-DeCkDN935ccOoW2MFP3qfdgUc",
  authDomain: "coderhouse-ecommerce-d4835.firebaseapp.com",
  projectId: "coderhouse-ecommerce-d4835",
  storageBucket: "coderhouse-ecommerce-d4835.firebasestorage.app",
  messagingSenderId: "207554969556",
  appId: "1:207554969556:web:dde7b51b90e33fc8b32041",
  measurementId: "G-BLQQMC16VZ"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar db para usar Firestore en toda la app
export const db = getFirestore(app);
