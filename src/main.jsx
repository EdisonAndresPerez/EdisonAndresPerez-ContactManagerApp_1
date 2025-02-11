import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './App.css';
import { Favorites } from './componentes/Favorites.jsx';
import {Contacts} from './componentes/Contacts'
import App from './App.jsx';
import { Overview } from './componentes/Overview.jsx';
import store from './redux/Store.jsx';
import { Provider} from 'react-redux';
import Home from './componentes/Home.jsx';




const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
  },
{
  path:'home',
  element:<App/>,
  children:[
    {
      path:'',
      element:<Overview/>
    },
    {
      path:'favorites',
      element:<Favorites/>
    },
    {
      path:'contacts',
      element:<Contacts/>
    },
  ]
},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);