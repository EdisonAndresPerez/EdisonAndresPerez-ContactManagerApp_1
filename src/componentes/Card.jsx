import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../App.css';    
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleFavorite, removeContact } from '../redux/contactSlice';

export function Cards({ user }) {
  const dispatch = useDispatch();

  /**
   * 📌 Marca o desmarca el contacto como favorito.
   * 
   * - `toggleFavorite(user.id)`: Enviamos una acción a Redux para cambiar el estado de favorito del contacto.
   * - Redux maneja esta acción y actualiza el estado global.
   * - No es necesario pasar `user` como parámetro, ya que tenemos acceso directo a `user.id`.
   */
  const handleFavorite = () => {
    dispatch(toggleFavorite(user.id));
  };

  /**
   * 📌 Elimina el contacto de la lista.
   * 
   * - `removeContact(user.id)`: Dispara una acción en Redux para eliminar el contacto.
   * - Redux procesa la acción y actualiza el estado eliminando el usuario.
   * - Como `user.id` es único, se usa para identificar y eliminar al usuario correcto.
   */
  const removeUser = () => {
    dispatch(removeContact(user.id));
  };

  return (
    <div className="card-container">
      {/* 📌 Imagen del usuario */}
      <img  
        src={user.avatar}  // La imagen de perfil del usuario
        alt={`Avatar de ${user.first_name} ${user.last_name}`}  // Descripción accesible
        width="100px"
        height="100px"
        className={user.isFavorite ? 'card-img-favorite' : ''} // Si es favorito, aplica una clase especial
      />

      {/* 📌 Nombre y correo del usuario */}
      <h2>{user.first_name} {user.last_name}</h2>
      <p>{user.email}</p>
      <hr />

      {/* 📌 Acciones: Agregar o quitar de favoritos, eliminar contacto */}
      {user.isFavorite ? (
        /**
         * 🛠 Si el usuario es favorito, mostramos un botón para quitarlo de favoritos.
         * 
         * - Se usa `faTimes` para indicar la acción de "remover de favoritos".
         * - Al hacer clic, `handleFavorite()` cambia su estado en Redux.
         */
        <button className="card-btnEliminar" onClick={handleFavorite}>                           
          <FontAwesomeIcon icon={faTimes} /> Remove
        </button>
      ) : (
        /**
         * 🛠 Si el usuario NO es favorito, mostramos dos opciones:
         * 
         * 1️⃣ `faHeart` → Para marcar como favorito.
         * 2️⃣ `faTrash` → Para eliminar el contacto (permanente).
         */
        <div className="card-iconosContainer">
          {/* Botón de agregar a favoritos */}
          <FontAwesomeIcon 
            icon={faHeart} 
            className="card-iconoCorazon" 
            onClick={handleFavorite} 
          />
          
          {/* Botón de eliminar contacto */}
          <FontAwesomeIcon 
            icon={faTrash} 
            className="card-iconoEliminar"
            onClick={removeUser} 
          />
        </div>
      )}
    </div>      
  );
}
