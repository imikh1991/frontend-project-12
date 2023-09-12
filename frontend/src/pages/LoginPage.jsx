import React from 'react';
import { Container, Card } from 'react-bootstrap';
import AuthForm from '../components/AuthFrom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import chatImage from '../images/chat.jpg';

const LoginPage = ({ login }) => (
  <div className="d-flex flex-column h-100">
    <Header />
    <Container fluid className="h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-14 col-md-8 col-xxl-6">
          <Card>
            <Card.Body className="row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src={chatImage} height="200" width="300" alt="Team of people" />
              </div>
              <AuthForm login={login} />
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
    <Footer />
  </div>
);
export default LoginPage;
