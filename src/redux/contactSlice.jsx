import { createSlice } from "@reduxjs/toolkit"

/**
 * 
 * El initialState contiene un array ( una lista ) de contactos con informacion precargada.
 * cada contacto tiene las propiedades como : id, email, isFavorite, isDeleted.Firt_name, lastName, avatar
 * 
 * Redux
 * redux es una libreria de gestion de estado global 
 * objectivo principal es centralizar y manejar el estado de la aplicacion 
 * facilita la administracion de datos compartidos entre multiples componentes
 * 
 */
const initialState = {
    contacts : [    {
        "id": 1,
        "email": "george.bluth@reqres.in",
        "isFavorite" : false,
        "isDeleted" :false,
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://reqres.in/img/faces/1-image.jpg",
      },
      {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "isFavorite" : false,
        "isDeleted" :false,
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
      },
      {
        "id": 3,
        "email": "emma.wong@reqres.in",
        "isFavorite" : false,
        "isDeleted" :false,
        "first_name": "Emma",
        "last_name": "Wong",
        "avatar": "https://reqres.in/img/faces/3-image.jpg"
      },
      {
        "id": 4,
        "email": "eve.holt@reqres.in",
        "isFavorite" : false,
        "isDeleted" :false,
        "first_name": "Eve",
        "last_name": "Holt",
        "avatar": "https://reqres.in/img/faces/4-image.jpg"
      },
      {
        "id": 5,
        "email": "charles.morris@reqres.in",
        "isFavorite" : false,
        "isDeleted" :false,
        "first_name": "Charles",
        "last_name": "Morris",
        "avatar": "https://reqres.in/img/faces/5-image.jpg"
      },
      {
        "id": 6,
        "email": "tracey.ramos@reqres.in",
        "isFavorite" : false,
        "isDeleted" :false,
        "first_name": "Tracey",
        "last_name": "Ramos",
        "avatar": "https://reqres.in/img/faces/6-image.jpg"
      },
      {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "isFavorite" : false,
        "isDeleted" :false,
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
      },
      {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "isFavorite" : false,
        "isDeleted" :false,
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
      },
      {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "isFavorite" : false,
        "isDeleted" :false,
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
      },
      {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "isFavorite" : false,
        "isDeleted" :false,
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg"
      },
      {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "isFavorite" : false,
        "isDeleted" :false,
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg"
      },
      {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "isFavorite" : false,
        "isDeleted" :false,
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg"
      }
    ], 
}

/**
 * 
 * createSlice es una funcion de redux toolkit que genera automaticamente un slice
 * con su reducer y acciones asociadas como eliminar agregar y remover
 * 
 * name: "contacts" es el nombre del slice se usa para generar tipos de acciones 
 * initialState: es el estado inical del slice   
 * 
 * reducers: un objecto que define las funciones reducer y las acciones asociadas
 * 
 */

const contactSlice = createSlice({
  name: "contacts",
  initialState,

  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },

    removeContact: (state, action) => {
      const id = action.payload;
      const contact = state.contacts.find((contact) => contact.id === id);

      if (contact) {
        contact.isDeleted = !contact.isDeleted;
      }
    },

    toggleFavorite: (state, action) => {
      const id = action.payload;
      const contact = state.contacts.find((contact) => contact.id === id);

      if (contact) {
        contact.isFavorite = !contact.isFavorite;
      }
    },
  },
});

export const { addContact, removeContact, toggleFavorite } = contactSlice.actions;

export default contactSlice.reducer;