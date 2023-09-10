import { useState } from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const [status, setStatus] = useState('not valid');

  const setValid = () => setStatus('valid');

  const setNotValid = () => setStatus('not valid');

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ status, setValid, setNotValid }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
