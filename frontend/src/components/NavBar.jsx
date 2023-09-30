import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useAuth } from './providers/AuthProvider';

const NavBar = () => {
  const { t } = useTranslation();
  const { isLoggedIn, onLogout } = useAuth();

  const handleLogout = () => {
    onLogout();
    toast.info(t('toast_messages.success'));
  };
  return (
    <Navbar
      bg="white"
      expand="lg"
      variant="light"
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand href="/">{t('logo')}</Navbar.Brand>
        {isLoggedIn && (
        <Button
          onClick={handleLogout}
        >
          {t('authorization.logout')}
        </Button>
        )}
      </Container>
    </Navbar>
  );
};
export default NavBar;
