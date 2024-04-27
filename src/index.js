import React from 'react';
import ReactDOM from 'react-dom/client';

// IMPORT ESTRUTURA DE ROTAS //
import { createBrowserRouter, RouterProvider,  } from "react-router-dom";
import App from "./App"
import Home from "./routes/Home";
import Registro from "./routes/Registro";
import Welcome from './routes/Welcome';

import ErrorPage from "./routes/ErrorPage";

// ROTAS //
const router = createBrowserRouter ([
{
  path:"/",
  element: <App />,
  //PAGINA DE ERRO //
  errorElement: <ErrorPage />,
  children: [
    {
      path:"/",
      element: <Home />,
    },
    {
      path:"/registro",
      element: <Registro />,
    },
    {
      path:"/welcome",
      element: <Welcome />,
    },
  ]
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

