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

    if (usuario === "" || password === "") {
      setError(true);
      return;
    }

    setError(false);
    setUser(usuario); // Establece el usuario en el estado superior o global
    navigate("/home"); // Redirige al usuario a la página principal
  };

  return (
    <form className="home_formulario_login" onSubmit={handleSubmit}>
      <h2 className="home_title">Inicia sesión</h2>

      <div className="home_form_container">
        <div className="home_form_group">
          <label htmlFor="usuario" className="home_form_label">
            Usuario:
          </label>
          <input
            type="text"
            id="usuario"
            className="home_form_input"
            placeholder="Ingresa tu usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>

        <div className="home_form_group">
          <label htmlFor="password" className="home_form_label">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            className="home_form_input"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input type="submit" className="home_form_submit" value="Entrar" />
      </div>

      {error && <p className="home_error">Por favor, llena todos los campos.</p>}
    </form>
  );
}

export default Home;