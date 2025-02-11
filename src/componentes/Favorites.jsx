import "../App.css";
import { Header } from "./Header"; // Componente que renderiza el encabezado
import { useSelector } from "react-redux"; // Hook de Redux para acceder al estado global
import { Cards } from "./Card"; // Componente que renderiza cada tarjeta de contacto

/**
 * 📌 Componente `Favorites`
 * 
 * Este componente es responsable de mostrar la lista de contactos que están marcados como favoritos.
 * El componente utiliza Redux para obtener el estado global de los contactos, filtra aquellos que están 
 * marcados como favoritos (`isFavorite === true`) y no han sido eliminados (`isDeleted === false`).
 * 
 * - `useSelector`: Obtiene el estado global de los contactos desde el store de Redux.
 * - `filter`: Filtra la lista de contactos para obtener solo aquellos que son favoritos y no han sido eliminados.
 * - `Cards`: Se usa para renderizar cada contacto filtrado como una tarjeta individual.
 * 
 * @returns {JSX.Element} Componente que muestra los contactos favoritos en tarjetas.
 */
export function Favorites() {
  // 📌 Usamos `useSelector` para obtener la lista de contactos desde el estado global de Redux
  const { contacts } = useSelector((state) => state.contacts);

  // 📌 Filtramos los contactos que están marcados como favoritos y no han sido eliminados
  const favorites = contacts.filter(contact => contact.isFavorite && !contact.isDeleted);

  return (
    <div>
      {/* 📌 Renderizamos el encabezado del componente */}
      <Header />
      
      {/* 📌 Renderizamos las tarjetas de los contactos favoritos */}
      <div className="cardListContainer">
        {favorites.map((contact, i) => {
          return <Cards key={i} user={contact} />;
        })}
      </div>
    </div>
  );
}
