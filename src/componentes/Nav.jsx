import icono from "../img/icono.png";
import { Link } from "react-router-dom";
import "../App.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactSlice";



/**
 * 📌 Componente `Form`
 * 
 * Este componente es un formulario que permite al usuario ingresar información para crear un nuevo contacto.
 * El formulario tiene los campos básicos: nombre, apellido, correo electrónico y una opción para activar el estado "favorito".
 * 
 * Al hacer submit, se previene el comportamiento predeterminado (recarga de la página) y se llama a la función `toggleForm`
 * que probablemente cierre el formulario o cambie su estado.
 * 
 * 
 */
// 📌 Función que se ejecuta al enviar el formulario
    // Previene el comportamiento predeterminado del formulario (recarga de la página)
    // y ejecuta la función `toggleForm()` pasada como prop para cerrar el formulario o hacer otra acción. 
    export function Form({ toggleForm }) {
      const dispatch = useDispatch(); // Para enviar acciones a Redux
      const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        isFavorite: false,
        isDeleted: false,
        avatar: `https://reqres.in/img/faces/${Math.floor(Math.random() * 12) + 1}-image.jpg` // Foto aleatoria
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: type === "checkbox" ? checked : value
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        // Creamos un nuevo contacto con un ID único
        const newContact = { ...formData, id: Date.now() };
    
        // Enviamos el contacto a Redux
        dispatch(addContact(newContact));
    
        // Cerramos el formulario
        toggleForm();
      };
    
      return (
        <form className="formulario" onSubmit={handleSubmit}>
          <div className="container">
            <div className="input-group">
              <label htmlFor="firstName">Nombre:</label>
              <input type="text" id="firstName" name="first_name" value={formData.first_name} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">Apellido:</label>
              <input type="text" id="lastName" name="last_name" value={formData.last_name} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Correo electrónico:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <input type="checkbox" id="likeFavorite" name="isFavorite" checked={formData.isFavorite} onChange={handleChange} />
              <label htmlFor="likeFavorite">Activar mi favorito</label>
            </div>
            <div className="input-group">
              <input type="submit" value="Guardar Contacto" />
            </div>
          </div>
        </form>
      );
    }
    
/**
 * 📌 Componente de Navegación (Nav)
 * 
 * - Contiene los enlaces principales de la aplicación.
 * - Muestra el logo en la parte izquierda.
 * - Tiene un botón `+ NEW` que abre un formulario para agregar contactos.
 * 
 * 
 */
export function Nav({ toggleForm }) {
  return (
    <nav>
      {/* 📌 Logo de la aplicación */}
      <div className="nav-logo">
        <img 
          className="nav-imgIcono" 
          src={icono} 
          alt="Logo de la aplicación"  // Mejor descripción para accesibilidad
        />
      </div>

      {/* 📌 Menú de navegación */}
      <ul className="nav-botonesNavbar">
        <li>
          <Link to={""} className="nav-btnOverview" aria-label="Ir a la vista general">
            OverView
          </Link>
        </li>
        <li>
          <Link to={"Contacts"} className="nav-btnContacts" aria-label="Ir a la lista de contactos">
            Contacts
          </Link>
        </li>
        <li>
          <Link to={"Favorites"} className="nav-btnFavorite" aria-label="Ir a la lista de favoritos">
            Favorites
          </Link>
        </li>
        <li>
          {/* 📌 Botón para abrir el formulario de nuevo contacto */}
          <button 
            className="nav-btnNew" 
            onClick={toggleForm}  // Se pasa directamente la función
            aria-label="Abrir formulario para nuevo contacto"
          >
            + NEW
          </button>
        </li>
      </ul>
    </nav>
  );
}