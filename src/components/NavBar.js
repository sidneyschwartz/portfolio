import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

class Navigation extends React.Component {
    render() {
        return(
            <Navbar variant="dark" bg="dark" expand="lg" sticky="top">
            <Container>
              <Navbar.Brand href="#home">Sidney Schwartz</Navbar.Brand>
              <a href="https://www.linkedin.com/in/sidneyschwartz/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="navbar-icon" size='lg' />
                  </a>
              {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
              {/* <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#projects">Projects</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="navbar-icon" />
                  </a>
                </Nav>
              </Navbar.Collapse> */}
            </Container>
          </Navbar>
        );
    }
}

export default Navigation;