import React from 'react';
import LoginPage from '../../pages/LoginPage.jsx';
import HomePage from '../../pages/HomePage.jsx';
import ErrorPage from '../../pages/ErrorPage.jsx';

const routes = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
];

export default routes;
