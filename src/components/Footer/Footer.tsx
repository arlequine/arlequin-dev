import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-dark py-4">
      <Container>
        <Row className="justify-content-between">
          <Col xs={12} md={6}>
            <h5>Arlequin Dev</h5>
            <p>Lo importante es el camino y en él <strong>Caer</strong>, <strong>Levantarse</strong>, <strong>Insistir</strong>, <strong>Aprender</strong></p>
          </Col>
          <Col xs={12} md={6} className="text-md-right d-flex flex-column align-items-end">
            <h5>Redes Sociales</h5>
            <div>
              <Link to="https://github.com/arlequine" className="text-dark mx-2"><FaGithub /></Link>
                {/* <Link to="https://www.instagram.com/el_arlequin_/" className="text-dark mx-2"><FaInstagram /></Link> */}
              <Link to="https://www.linkedin.com/in/alfredo-hdz-noriega/" className="text-dark mx-2"><FaLinkedin /></Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; {new Date().getFullYear()} Arlequin Dev. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;