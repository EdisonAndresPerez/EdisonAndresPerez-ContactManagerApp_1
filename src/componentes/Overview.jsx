import "../App.css";
import { useSelector } from "react-redux";
import { Favorites } from "./Favorites";
import { Contacts } from "./Contacts";

/**
 * 📌 Componente `Overview`
 * 
 * El componente `Overview` es la vista principal de la aplicación donde se muestran
 * dos subcomponentes: `Favorites` y `Contacts`. 
 * 
 * El componente utiliza `useSelector` de Redux para acceder al estado global, en este caso
 * la lista de contactos. Los subcomponentes `Favorites` y `Contacts` se renderizan dentro de `Overview`.
 * 
 *
 */
export function Overview() {
  // 📌 Accedemos al estado global de Redux usando `useSelector`.
  // `useSelector` nos permite acceder a cualquier parte del estado global.
  // En este caso, estamos extrayendo la lista de contactos desde `state.contacts.contacts`.
  const contacts = useSelector((state) => state.contacts.contacts);

  return (
    <div>
      {/* 📌 Se renderizan los componentes `Favorites` y `Contacts` */}
      {/* `Favorites` y `Contacts` muestran las secciones correspondientes de favoritos y contactos */}
      <Favorites />
      <Contacts />
    </div>
  );
}
