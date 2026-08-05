import "../App.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Home({ setUser }) {
  const [usuario, setUsuario] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (usuario.trim() === "" || password.trim() === "") {
      setError(true);

      return;
    }

    setError(false);

    setUser(usuario.trim());

    navigate("/home");
  };

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);

    if (error) setError(false);
  };

  return (
    <div className="home_login_page">
      <form
        className="home_formulario_login"
        onSubmit={handleSubmit}
        noValidate
      >
        <header className="home_login_header">
          <h1 className="home_title">Inicia sesión</h1>

          <p className="home_subtitle">Accede para gestionar tus contactos</p>
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

          <button type="submit" className="home_form_submit">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Home;
