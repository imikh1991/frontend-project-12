import './App.css';
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import routes from './base/enums/routeList';

const Router = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('admin') || false);

  const login = () => {
    setIsAuthenticated(true);
  };
  console.log('isAuthenticated>>>', isAuthenticated);

  return (
    <Router>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <HomePage />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route path="login" element={<LoginPage login={login} />} />
    </Router>
  );
};

export default App;
