import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <section className="home-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Bienvenido a <span>JotaStore</span></h1>
          <p>Estilo urbano, minimalista y 100% auténtico.</p>

          {/* Usamos Link para navegación SPA */}
          <Link to="/productos" className="cta-btn">
            Ver catálogo
          </Link>
        </div>

        <div className="hero-carousel">
          <img
            src="https://images.pexels.com/photos/29211862/pexels-photo-29211862.jpeg"
            alt="Colección JotaStore"
          />
          <img
            src="https://images.pexels.com/photos/12513261/pexels-photo-12513261.jpeg"
            alt="Look urbano"
          />
          <img
            src="https://images.pexels.com/photos/33574612/pexels-photo-33574612.jpeg"
            alt="Diseño minimalista"
          />
        </div>
      </div>
    </section>
  )
}

export default Home
