import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import YourPost_page from './components/YourPost_page'

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "yourPost",
        element: <YourPost_page />,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <RouterProvider router={router}/>
        
);
