import React from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useAuth } from './components/providers/AuthProvider';
import MainContainer from './components/MainContainer';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import ChatPage from './components/pages/ChatPage';
import ErrorPage from './components/pages/ErrorPage';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import routes from './routes';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
};

const App = () => (
  <MainContainer>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route
          path={routes.root}
          element={(
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          )}
        />
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.signup} element={<SignupPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </MainContainer>
);

export default App;
