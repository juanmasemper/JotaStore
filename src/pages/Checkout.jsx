import { useState } from "react";
import { useCart } from "../context/CartContext";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Swal from "sweetalert2";
import "animate.css";
import "./pages.css";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    phone: "",
  });

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.email || !buyer.phone) {
      return Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Completá todos los datos para continuar",
        background: "#1e1e2e",
        color: "#fff",
      });
    }

    if (buyer.email !== buyer.confirmEmail) {
      return Swal.fire({
        icon: "error",
        title: "Los emails no coinciden",
        background: "#1e1e2e",
        color: "#fff",
      });
    }

    const order = {
      buyer,
      items: cart,
      total,
      date: Timestamp.now(),
    };

    try {
      const ordersRef = collection(db, "orders");
      const docRef = await addDoc(ordersRef, order);

      Swal.fire({
        icon: "success",
        title: "Compra realizada 🎉",
        html: `
          Gracias por tu compra, <strong>${buyer.name}</strong>!<br>
          <br>
          ID de orden:<br>
          <strong style="color:#cba6f7">${docRef.id}</strong>
        `,
        confirmButtonColor: "#cba6f7",
        background: "#1e1e2e",
        color: "#fff",
        showClass: { popup: "animate__animated animate__fadeInDown" },
        hideClass: { popup: "animate__animated animate__fadeOutUp" },
      }).then(() => {
        clearCart();
        navigate("/"); // ⬅ REDIRECCIÓN AL HOME
      });

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al procesar la compra",
        text: error.message,
        background: "#1e1e2e",
        color: "#fff",
      });
    }
  };

  return (
    <section className="checkout-container">
      <h2 className="checkout-title">🧾 Finalizar compra</h2>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={buyer.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={buyer.email}
          onChange={handleChange}
        />

        <input
          type="email"
          name="confirmEmail"
          placeholder="Confirmar correo"
          value={buyer.confirmEmail}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
        />

        <button type="submit" className="checkout-btn">
          Confirmar compra
        </button>
      </form>
    </section>
  );
}

export default Checkout;
