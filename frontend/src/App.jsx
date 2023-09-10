import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
