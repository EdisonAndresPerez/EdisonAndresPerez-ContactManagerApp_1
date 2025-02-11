Contact Manager

📖 Descripción

Este proyecto es una aplicación de gestión de contactos que permite a los usuarios:

Ver una lista de contactos.

Agregar nuevos contactos a la lista.

Marcar contactos como favoritos.

Eliminar (o deshabilitar) contactos sin borrarlos definitivamente.

La aplicación está construida con React.js y gestiona el estado global utilizando Redux Toolkit.


🛠 Herramientas y Tecnologías

React.js - Librería principal para la creación de la interfaz de usuario.

Redux Toolkit - Manejo del estado global de los contactos.

React Router - Navegación entre páginas dentro de la aplicación.

FontAwesome - Íconos para mejorar la experiencia visual.

CSS - Estilos personalizados para la aplicación.

Vite - Entorno de desarrollo rápido para React.


📂 Estructura del Proyecto

├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── api.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── componentes
│   │   ├── Card.jsx
│   │   ├── Contacts.jsx
│   │   ├── Favorites.jsx
│   │   ├── Header2.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Nav.jsx
│   │   └── Overview.jsx
│   ├── img
│   │   ├── corazon.png
│   │   └── icono.png
│   ├── index.css
│   ├── main.jsx
│   └── redux
│       ├── contactSlice.jsx
│       └── Store.jsx
└── vite.config.js


🚀 Instalación y Uso

1️⃣ Clonar el Repositorio

git clone https://github.com/tuusuario/contact-manager.git
cd contact-manager

2️⃣ Instalar Dependencias

npm install

3️⃣ Ejecutar el Proyecto

npm run dev

📌 Características Principales

✅ Lista de contactos predefinidos.
✅ Agregar nuevos contactos a la lista.
✅ Marcar contactos como favoritos.
✅ Eliminar contactos sin borrarlos definitivamente.
✅ Interfaz sencilla y amigable.
✅ Estado manejado con Redux Toolkit.

📝 Notas Adicionales

Actualmente, los contactos se manejan en una lista local dentro del estado de Redux.

Se puede expandir la funcionalidad para conectar con una API real y guardar datos en una base de datos.

📧 Contacto

Si tienes dudas o quieres contribuir al proyecto, puedes contactarme en [tu correo o usuario de GitHub]. 😊