import "../App.css";
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faKey } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


function Home ({setUser}) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();



  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (usuario === "" || password === "" ){
      setError(true)
      return
    }
    setError(false)

    setUsuario([usuario])

    navigate("/home");



    console.log('Usuario:', usuario);
    console.log('Contraseña:', password);
  };


  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  return (
    <div className="Home-cardLogin">
      <h1>Login</h1>
      <p>Mensaje para colocar</p>
      <form onSubmit={handleSubmit}>
        <div className="Home-textField">
        <label htmlFor="usuario">
            <FontAwesomeIcon icon={faUser} /> Usuario
          </label>
          <input
            type="text"
            value={usuario}
            onChange={handleUsuarioChange}
          />
        </div>
        <div className="Home-textField">
          <label htmlFor="password">
          <FontAwesomeIcon icon={faLock} /> Contraseña
          </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="Home-btnLogin">
        <FontAwesomeIcon icon={faKey} /> Iniciar sesión
        </button>
      </form>
      {error && <p>Porfavor llenar todos los campos para Poder ingresar</p>}
    </div>
  );
}

export default Home;




