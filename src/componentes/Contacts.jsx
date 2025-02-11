import { useSelector } from "react-redux";
import "../App.css";
import { Header2 } from "./Header2";
import { Cards } from "./Card";

export function Contacts() {
  /**
   * 📌 Extraemos `contacts` del estado global de Redux.
   * 
   * - `{ contacts }`: Se usa **desestructuración** para obtener la propiedad `contacts` directamente del estado global.
   * - `useSelector`: Hook de React-Redux que permite acceder al estado global de Redux.
   * - `state.contacts`: Asume que en el **store de Redux** (ubicado en la carpeta `redux`) existe un `contacts`,
   *   el cual contiene un arreglo de contactos.
   */
  const { contacts } = useSelector((state) => state.contacts);

  /**
   * 📌 Filtramos los contactos activos.
   * 
   * - `filter()`: Método que crea un nuevo arreglo con los contactos que cumplen la condición.
   * - Se excluyen los contactos que tienen `isDeleted === true`, 
   *   es decir, solo se muestran los contactos que **no han sido eliminados**.
   */
  const contactsList = contacts.filter(contact => contact.isDeleted === false);

  return (
    <div>
      {/* Componente de encabezado */}
      <Header2 /> 

      {/* Contenedor principal de la lista de contactos */}
      <div className="cardListContainer">
        {contactsList.map((contact, index) => (
          /**
           * 📌 Renderizamos cada contacto con el componente <Cards>.
           * 
           * - `key={index}`: Se usa el índice del contacto en el array como clave única.
           * - `user={contact}`: Pasamos el objeto `contact` como prop `user` al componente <Cards>.
           */
          <Cards key={index} user={contact} />
        ))}
      </div>
    </div>
  );
}
