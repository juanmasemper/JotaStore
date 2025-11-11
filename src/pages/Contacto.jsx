import { useState } from 'react'
import Swal from 'sweetalert2'
import './pages.css'

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.nombre || !formData.email || !formData.mensaje) {
      Swal.fire({
        title: 'Campos incompletos',
        text: 'Por favor, completá todos los campos antes de enviar.',
        icon: 'warning',
        confirmButtonColor: '#cba6f7',
        background: '#1e1e2e',
        color: '#fff',
      })
      return
    }

    Swal.fire({
      title: 'Mensaje enviado 💌',
      text: 'Gracias por contactarte con JotaStore. Te responderemos pronto.',
      icon: 'success',
      confirmButtonColor: '#cba6f7',
      background: '#1e1e2e',
      color: '#fff',
    })

    setFormData({ nombre: '', email: '', mensaje: '' })
  }

  return (
    <section className="contact-page">
      <h1 className="page-title">
        Contacto <span className="brand">JotaStore</span>
      </h1>

      <p className="contact-subtitle">
        Podés escribirnos o seguirnos en redes sociales.<br />
        También podés dejarnos tu mensaje acá abajo 👇
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo electrónico"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="mensaje"
          placeholder="Escribí tu mensaje..."
          rows="5"
          value={formData.mensaje}
          onChange={handleChange}
        />
        <button type="submit">Enviar mensaje</button>
      </form>
    </section>
  )
}

export default Contacto
