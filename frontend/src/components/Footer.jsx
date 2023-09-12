import { Nav, Navbar, Container } from 'react-bootstrap';

const Footer = () => (
  <Navbar bg="white" className="shadow-sm" as="div" fixed="bottom">
    <Container>
      <Navbar.Brand href="/">Online Chat</Navbar.Brand>
      <Nav.Link href="https://github.com/imikh1991">
        Created by Hexlet Student
      </Nav.Link>
    </Container>
  </Navbar>
);

export default Footer;
