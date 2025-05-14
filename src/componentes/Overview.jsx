import "../App.css";
import { Favorites } from "./Favorites";
import { Contacts } from "./Contacts";

/**
 * 📌 Componente `Overview`
 * 
 * El componente `Overview` es la vista principal de la aplicación donde se muestran
 * dos subcomponentes: `Favorites` y `Contacts`. 
 *
 */
export function Overview() {
  return (
    <>
      {/* 📌 Se renderizan los componentes `Favorites` y `Contacts` */}
      {/* `Favorites` y `Contacts` muestran las secciones correspondientes de favoritos y contactos */}
      <Favorites />
      <Contacts />
    </>
  );
}
