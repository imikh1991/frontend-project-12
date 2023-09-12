import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { useState, useEffect } from 'react';

import routes from './base/enums/routeList';

const Router = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

const App = () => {
  const [authenticated, setAuthenticated] = useState(null);
  useEffect(() => {
    const currentUser = localStorage.getItem('admin');
    if (currentUser) {
      setAuthenticated(currentUser);
    }
  }, []);

  if (authenticated === null) {
    return null;
  }

  console.log('authenticated>>', authenticated);

  return (
    // TO DO -> REFACTOR THIS ERROR
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <div>
      {authenticated ? (
        <Router />
      ) : (
        <Navigate replace to="/login" />
      )}
    </div>
  );
};

export default App;
