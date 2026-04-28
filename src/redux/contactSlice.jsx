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
        "avatar": "https://i.pravatar.cc/150?img=1",
      },
      {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "isFavorite" : false,
        "isDeleted" :false,
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://i.pravatar.cc/150?img=2"
      },
      {
        "id": 3,
        "email": "emma.wong@reqres.in",
        "isFavorite" : false,
        "isDeleted" :false,
        "first_name": "Emma",
        "last_name": "Wong",
        "avatar": "https://i.pravatar.cc/150?img=3"
      },
      {
        "id": 4,
        "email": "eve.holt@reqres.in",
        "isFavorite" : false,
        "isDeleted" :false,
        "first_name": "Eve",
        "last_name": "Holt",
        "avatar": "https://i.pravatar.cc/150?img=4"
      },
      {
        "id": 5,
        "email": "charles.morris@reqres.in",
        "isFavorite" : false,
        "isDeleted" :false,
        "first_name": "Charles",
        "last_name": "Morris",
        "avatar": "https://i.pravatar.cc/150?img=5"
      },
      {
        "id": 6,
        "email": "tracey.ramos@reqres.in",
        "isFavorite" : false,
        "isDeleted" :false,
        "first_name": "Tracey",
        "last_name": "Ramos",
        "avatar": "https://i.pravatar.cc/150?img=6"
      },
      {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "isFavorite" : false,
        "isDeleted" :false,
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://i.pravatar.cc/150?img=7"
      },
      {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "isFavorite" : false,
        "isDeleted" :false,
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://i.pravatar.cc/150?img=8"
      },
      {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "isFavorite" : false,
        "isDeleted" :false,
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://i.pravatar.cc/150?img=9"
      },
      {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "isFavorite" : false,
        "isDeleted" :false,
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://i.pravatar.cc/150?img=10"
      },
      {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "isFavorite" : false,
        "isDeleted" :false,
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://i.pravatar.cc/150?img=11"
      },
      {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "isFavorite" : false,
        "isDeleted" :false,
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://i.pravatar.cc/150?img=12"
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
      console.log("Nuevo contacto agregado:", action.payload);
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