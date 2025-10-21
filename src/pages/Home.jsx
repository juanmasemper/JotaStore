import ItemListContainer from '../components/ItemListContainer'
import './pages.css'

function Home() {
  return (
    <ItemListContainer 
      greeting="¡Bienvenido a" 
      storeName="JotaStore" 
    />
  )
}

export default Home
