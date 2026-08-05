import { NavLink } from "react-router-dom";
import "../App.css";
import GlobantLogo from "../img/GlobantLogo.webp";
import GlobantLogoButton from "../img/GlobantLogoButton.png"
import { useState } from "react";
import { Form } from "./Form";

const navLinks = [
  {
    to: "",
    label: "OverView",
    className: "nav-btnOverview",
  },
  {
    to: "contacts",
    label: "Contacts",
    className: "nav-btnContacts",
  },
  {
    to: "favorites",
    label: "Favorites",
    className: "nav-btnFavorite",
  },
];

export function Nav() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const toggleForm = () => setIsFormVisible((prev) => !prev);

  return (
    <>
      <nav>
        <img src={GlobantLogo} alt="Logo Globant" className="nav-logo" />
        <ul className="nav-botonesNavbar">
          {/* Enlace a la vista general */}
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                end={link.to === ""}
                className={({ isActive }) =>
                  `${link.className}${isActive ? " active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <button
              className="nav-btnNew"
              onClick={toggleForm}
              aria-label="Abrir formulario para nuevo contacto"
            >
              <span className="nav-btnNew-label">
                <img
                  src={GlobantLogoButton}
                  alt=""
                  className="nav-btnNew-icon"
                  aria-hidden="true"
                />
                New Contact
              </span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Renderiza el formulario si está visible */}
      {isFormVisible && <Form toggleForm={toggleForm} />}
    </>
  );
}
