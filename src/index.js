import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css';
import HomePage from 'components/pages/HomePage/HomePage';
import RegisterPage from 'components/pages/RegisterPage/RegisterPage'
import LoginPage from 'components/pages/LoginPage/LoginPage'
import AddFilmPage from 'components/pages/AddFilmPage/AddFilmPage';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/addnewfilm',
    element: <AddFilmPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);