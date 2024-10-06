// import { React } from 'react'
// import { ReactDOM } from 'react-dom/client'
import App from './App'
import './index.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";

// import * as React from "react";
// import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './component/Home/Home';
import Login from './component/Login/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
