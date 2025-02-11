import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice";


const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export default store;
