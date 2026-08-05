import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactSlice";

export function Form({ toggleForm }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    isFavorite: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addContact({
        ...formData,
        id: Date.now(),
        isDeleted: false,
      }),
    );
    toggleForm();
  };

  return (
    <form onSubmit={handleSubmit} className="home_formulario_login contact_form">
      <header className="home_login_header">
        <h2 className="home_title">Nuevo contacto</h2>
        <p className="home_subtitle">Completa la información del contacto</p>
      </header>

      <div className="home_form_container">
        <div className="home_form_group">
          <label htmlFor="firstName" className="home_form_label">Nombre</label>
          <input
            type="text"
            id="firstName"
            name="first_name"
            className="home_form_input"
            placeholder="Nombre del contacto"
            value={formData.first_name}
            onChange={handleChange}
            autoComplete="given-name"
            required
          />
        </div>

        <div className="home_form_group">
          <label htmlFor="lastName" className="home_form_label">Apellido</label>
          <input
            type="text"
            id="lastName"
            name="last_name"
            className="home_form_input"
            placeholder="Apellido del contacto"
            value={formData.last_name}
            onChange={handleChange}
            autoComplete="family-name"
            required
          />
        </div>

        <div className="home_form_group">
          <label htmlFor="email" className="home_form_label">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            className="home_form_input"
            placeholder="correo@ejemplo.com"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </div>

        <div className="contact_form_favorite">
          <input
            type="checkbox"
            id="likeFavorite"
            name="isFavorite"
            checked={formData.isFavorite}
            onChange={handleChange}
          />
          <label htmlFor="likeFavorite">Marcar como favorito</label>
        </div>

        <button type="submit" className="home_form_submit">
          <span className="home_form_submit_label">Guardar contacto</span>
        </button>
      </div>
    </form>
  );
}
