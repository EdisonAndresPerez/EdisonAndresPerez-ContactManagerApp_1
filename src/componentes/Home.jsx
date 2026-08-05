import "../App.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import LoginGlobantIMG from "../img/upscalemedia-transformed.jpeg";
import { LoadingScreen } from "./LoadingScreen";

function Home() {
  const [usuario, setUsuario] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (usuario.trim() === "" || password.trim() === "") {
      setError(true);

      return;
    }

    setError(false);
    setIsLoading(true);

    window.setTimeout(() => {
      navigate("/home", { state: { skipLoader: true } });
    }, 1000);
  };

  function handleInputChange(setter) {
    return function (event) {
      setter(event.target.value);

      if (error) {
        setError(false);
      }
    };
  }

  return (
    <div className="home_login_page">
      {isLoading && <LoadingScreen />}
      <div className="home_login_layout">
        <section className="home_login_form_panel">
          <form
            className="home_formulario_login"
            onSubmit={handleSubmit}
            noValidate
          >
            <header className="home_login_header">
              <h1 className="home_title">Inicia sesión</h1>

              <p className="home_subtitle">
                Accede para gestionar tus contactos
              </p>
            </header>

            <div className="home_form_container">
              <div className="home_form_group">
                <label htmlFor="usuario" className="home_form_label">
                  Usuario
                </label>

                <input
                  type="text"
                  id="usuario"
                  className="home_form_input"
                  placeholder="Tu nombre de usuario"
                  value={usuario}
                  onChange={handleInputChange(setUsuario)}
                  autoComplete="username"
                  autoFocus
                  required
                  aria-invalid={error}
                  aria-describedby={error ? "home-login-error" : undefined}
                />
              </div>

              <div className="home_form_group">
                <label htmlFor="password" className="home_form_label">
                  Contraseña
                </label>

                <input
                  type="password"
                  id="password"
                  className="home_form_input"
                  placeholder="Tu contraseña"
                  value={password}
                  onChange={handleInputChange(setPassword)}
                  autoComplete="current-password"
                  required
                  aria-invalid={error}
                />
              </div>

              {error && (
                <p id="home-login-error" className="home_error" role="alert">
                  Por favor, completa todos los campos.
                </p>
              )}

              <button type="submit" className="home_form_submit" disabled={isLoading}>
                <span className="home_form_submit_label">Entrar</span>
              </button>
            </div>
          </form>
        </section>

        <aside className="home_login_image_panel" aria-hidden="true">
          <img src={LoginGlobantIMG} alt="" className="home_login_image" />

          <div className="home_login_image_overlay">
            <p className="home_login_image_text">Contact Manager</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Home;
