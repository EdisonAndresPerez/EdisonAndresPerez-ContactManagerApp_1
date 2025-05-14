import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactSlice";

export function Form({ toggleForm }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    isFavorite: false,
    avatar: `https://reqres.in/img/faces/${Math.floor(Math.random() * 12) + 1}-image.jpg`
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      ...formData,
      id: Date.now(),
      isDeleted: false, // Asegúrate de incluir esta propiedad
    };
    dispatch(addContact(newContact));
    toggleForm(); // Cierra el formulario
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <div className="container">
        <div className="input-group">
          <label htmlFor="firstName">Nombre:</label>
          <input
            type="text"
            id="firstName"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastName">Apellido:</label>
          <input
            type="text"
            id="lastName"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="checkbox"
            id="likeFavorite"
            name="isFavorite"
            checked={formData.isFavorite}
            onChange={handleChange}
          />
          <label htmlFor="likeFavorite">Activar mi favorito</label>
        </div>
        <div className="input-group">
          <input type="submit" value="Guardar Contacto" />
        </div>
      </div>
    </form>
  );
}