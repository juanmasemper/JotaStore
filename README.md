# 🛒 JotaStore - E-commerce React + Firebase

Una tienda online moderna construida con **React 19**, **Vite**, **Firebase/Firestore** y **React Router**. Incluye catálogo de productos, carrito de compras dinámico, filtrado por categorías y checkout.

---

## ✨ Características Principales

### 🏪 Catálogo de Productos
- **Listado dinámico** de productos desde Firestore
- **Filtrado por categorías** con dropdown mejorado
- **Buscador/detalles** de cada producto individual
- **Stock control** — No permite agregar más del disponible

### 🛒 Carrito de Compras
- **Gestión en tiempo real** con Context API
- **Agregar/eliminar productos**
- **Validación de stock** antes de agregarse
- **Cálculo automático** del total
- **Widget visual** en navbar con cantidad de items

### 🏠 Navegación
- **Home** — Página de bienvenida
- **Productos** (`/`) — Catálogo con filtro de categorías
- **Detalle de producto** (`/item/:id`) — Vista ampliada
- **Carrito** (`/cart`) — Resumen y checkout
- **Contacto** — Formulario de contacto
- **404** — Página de error para rutas no encontradas

### 🎨 Interfaz
- **Responsive design** — Compatible con móvil, tablet y desktop
- **Animaciones** con Animate.css
- **Alertas elegantes** con SweetAlert2
- **Carrusel de imágenes** en detalle de producto

---

## 📁 Estructura del Proyecto

```
src/
├── components/              # Componentes reutilizables
│   ├── NavBar.jsx          # Barra de navegación
│   ├── CategoryFilter.jsx   # Filtro de categorías (dropdown)
│   ├── ItemListContainer.jsx# Contenedor de listado (con filtro)
│   ├── ItemList.jsx        # Lista de productos
│   ├── Item.jsx            # Card individual de producto
│   ├── ItemDetail.jsx      # Vista detallada de producto
│   ├── ItemDetailContainer.jsx # Contenedor de detalle
│   ├── ItemCount.jsx       # Selector de cantidad
│   └── CartWidget.jsx      # Icono carrito en navbar
│
├── pages/                   # Páginas principales
│   ├── Home.jsx            # Página de inicio
│   ├── Productos.jsx       # (Redirige a /)
│   ├── Cart.jsx            # Página del carrito
│   ├── Checkout.jsx        # Finalizar compra
│   ├── Contacto.jsx        # Formulario de contacto
│   └── NotFound.jsx        # Página 404
│
├── context/
│   └── CartContext.jsx     # Context del carrito (CartProvider, useCart)
│
├── firebase/
│   └── firebase.js         # Configuración Firebase + Firestore
│
├── assets/                 # Imágenes y recursos estáticos
│
├── App.jsx                 # Enrutamiento principal
├── main.jsx                # Punto de entrada React
├── App.css                 # Estilos globales
├── index.css               # Reset CSS
└── layout.css              # Estilos de layout
```

---

## 🚀 Instalación y Ejecución

### Prerequisitos
- **Node.js** >= 16
- **npm** o **yarn**

### Pasos de Instalación

1. **Clonar el repositorio** (o descargar como ZIP)
   ```bash
   git clone <URL_DEL_REPO>
   cd CreaTuLanding1-Semper
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```
   La app se abrirá en `http://localhost:5173`

4. **Build para producción**
   ```bash
   npm run build
   ```
   Los archivos compilados estarán en `dist/`

5. **Preview de build**
   ```bash
   npm run preview
   ```

---

## 📋 Componentes Principales

### **NavBar**
- Logo que dirige a Home
- Menú hamburguesa responsive
- Widget del carrito con contador
- Enlaces de navegación

### **CategoryFilter**
- Dropdown estilizado para seleccionar categorías
- Muestra "Cargando..." mientras se obtienen categorías de Firestore
- Spinner en el icono durante carga
- Filtra automáticamente el catálogo

### **ItemListContainer**
- Obtiene productos de Firestore
- Aplica filtro por categoría (parámetro de ruta: `/categoria/:categoryId`)
- Muestra loading mientras se cargan productos
- Integra el `CategoryFilter`

### **Cart Context**
```javascript
// Usar en cualquier componente
const { cart, addToCart, removeItem, clearCart, total } = useCart();

// addToCart retorna boolean:
// true  → producto agregado
// false → stock insuficiente (muestra alerta SweetAlert2)
```

---

## 🎣 Hooks Personalizados

### **useProducts(category)**
Hook para obtener productos de Firestore con filtrado opcional por categoría.

```javascript
import { useProducts } from '../hooks/useProducts';

const { items, loading } = useProducts('Electrónica');
// items: Array de productos filtrados
// loading: boolean para mostrar estado de carga
```

**Parámetros:**
- `category` (string, opcional): Categoría para filtrar. Si está vacío, obtiene todos.

**Retorna:**
- `items` (Array): Lista de productos
- `loading` (boolean): Estado de carga

---

### **useCategories()**
Hook para obtener lista única de categorías de todos los productos.

```javascript
import { useCategories } from '../hooks/useCategories';

const { categories, loading } = useCategories();
// categories: ['Electrónica', 'Ropa', 'Libros', ...]
// loading: boolean
```

**Retorna:**
- `categories` (Array): Lista única de categorías
- `loading` (boolean): Estado de carga

---

## 🔧 Configuración Firebase

El proyecto está conectado a un proyecto Firebase de CoderHouse. La config se encuentra en `src/firebase/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyAJTUrNN-...",
  authDomain: "coderhouse-ecommerce-d4835.firebaseapp.com",
  projectId: "coderhouse-ecommerce-d4835",
  // ... otros parámetros
};
```

### Base de datos (Firestore)
**Colección: `products`**
```json
{
  "id": "auto",
  "name": "Producto Ejemplo",
  "price": 99.99,
  "stock": 10,
  "category": "Electrónica",
  "description": "Descripción del producto",
  "image": "https://...",
  "rating": 4.5
}
```

---

## 🎯 Rutas Disponibles

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | `ItemListContainer` | Catálogo principal con filtro |
| `/home` | `Home` | Página de inicio |
| `/productos` | - | Redirige a `/` |
| `/categoria/:categoryId` | `ItemListContainer` | Catálogo filtrado por categoría |
| `/item/:id` | `ItemDetailContainer` | Detalle ampliado del producto |
| `/cart` | `Cart` | Resumen del carrito |
| `/checkout` | `Checkout` | Finalizar compra |
| `/contacto` | `Contacto` | Formulario de contacto |
| `*` | `NotFound` | Página 404 |

---

## 📦 Scripts Disponibles

```bash
# Desarrollo (reloads en caliente)
npm run dev

# Build optimizado para producción
npm run build

# Preview del build local
npm run preview

# Linter (ESLint)
npm run lint
```

---

## 🎨 Personalización de Estilos

### Archivos de estilos globales
- `src/index.css` — Reset y estilos base
- `src/App.css` — Estilos del App principal
- `src/layout.css` — Estilos de layout/grid

### Componentes con estilos
Cada componente tiene su `.css` asociado (ej: `NavBar.jsx` + `NavBar.css`)

### CategoryFilter
El nuevo dropdown de filtro incluye:
- Bordes redondeados y sombras
- Icono de caret SVG personalizado
- Animación spinner en estado loading
- Focus styles accesibles

---

## 👨‍💻 Autor

**Juan Manuel Semper** — Proyecto de CoderHouse (ReactJS)

---

## 📄 Licencia

Este proyecto es de propósito educativo.
