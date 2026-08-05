import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { useDispatch } from "react-redux";
import { toggleFavorite, removeContact } from "../redux/contactSlice";




export function Cards({ user }) {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(toggleFavorite(user.id));
  };

  const removeUser = () => {
    dispatch(removeContact(user.id));
  };

  return (
    <div className="card-container">
      <img
        src={user.avatar} 
        alt={`Avatar de ${user.first_name} ${user.last_name}`} // Descripción accesible
        width="100px"
        height="100px"
        className={user.isFavorite ? "card-img-favorite" : ""} 
      />
      <h2>
        {user.first_name} {user.last_name}
      </h2>
      <p>{user.email}</p>
      <hr />

      {user.isFavorite ? (
        <button className="card-btnEliminar" onClick={handleFavorite}>
          <FontAwesomeIcon icon={faTimes} /> Remove
        </button>
      ) : (
        <div className="card-iconosContainer">
          <FontAwesomeIcon
            icon={faHeart}
            className="card-iconoCorazon"
            onClick={handleFavorite}
          />
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
