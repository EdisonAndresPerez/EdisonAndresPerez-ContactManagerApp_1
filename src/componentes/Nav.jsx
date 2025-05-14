import { Link } from "react-router-dom";
import "../App.css";
import React, { useState } from "react";
import { Form } from "./Form";

/**
 * Componente `Nav`
 * 
 * Este componente representa la barra de navegación principal de la aplicación.
 * 
 * Funcionalidad:
 * - Navegación entre las secciones principales: OverView, Contacts y Favorites.
 * - Botón para abrir el formulario de creación de contactos.
 */
export function Nav() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  /**
   * Alterna la visibilidad del formulario.
   */
  const toggleForm = () => {
    setIsFormVisible((prev) => !prev);
  };

  return (
    <>
      <nav>
        <ul className="nav-botonesNavbar">
          {/* Enlace a la vista general */}
          <li>
            <Link
              to={""}
              className="nav-btnOverview"
              aria-label="Ir a la vista general"
            >
              OverView
            </Link>
          </li>

          {/* Enlace a la lista de contactos */}
          <li>
            <Link
              to={"Contacts"}
              className="nav-btnContacts"
              aria-label="Ir a la lista de contactos"
            >
              Contacts
            </Link>
          </li>

          {/* Enlace a la lista de favoritos */}
          <li>
            <Link
              to={"Favorites"}
              className="nav-btnFavorite"
              aria-label="Ir a la lista de favoritos"
            >
              Favorites
            </Link>
          </li>

          {/* Botón para abrir el formulario */}
          <li>
            <button
              className="nav-btnNew"
              onClick={toggleForm}
              aria-label="Abrir formulario para nuevo contacto"
            >
              + NEW
            </button>
          </li>
        </ul>
      </nav>

      {/* Renderiza el formulario si está visible */}
      {isFormVisible && <Form toggleForm={toggleForm} />}
    </>
  );
}