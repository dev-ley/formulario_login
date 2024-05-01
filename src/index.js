import React from 'react';
import ReactDOM from 'react-dom/client';
// CONTEXT 
import { UserProvider } from './Context/UserContext';

// IMPORT ESTRUTURA DE ROTAS //
import { createBrowserRouter, RouterProvider,  } from "react-router-dom";
import App from "./App"
import Home from "./routes/Home";
import Registro from "./routes/Registro";
import CadastroSucess from './routes/CadastroSucess';
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
    {
      path:"/cadastrosucess",
      element: <CadastroSucess />,
    },
  ]
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

