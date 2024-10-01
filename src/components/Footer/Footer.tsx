import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-dark py-4">
      <Container>
        <Row className="justify-content-between">
          <Col md={6}>
            <h5>Enlaces útiles</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-dark">Sobre Mi</Link></li>
              <li><Link to="/blog" className="text-dark">Blog</Link></li>
              {/* <li><a href="/contact" className="text-dark">Contacto</a></li>
              <li><a href="/privacy" className="text-dark">Blog</a></li>
              <li><a href="/terms" className="text-dark">Términos de servicio</a></li> */}
            </ul>
          </Col>
          <Col md={6} className="text-md-right">
            <h5>Redes Sociales</h5>
            <div>
              <Link to="https://github.com/arlequine" className="text-dark mx-2"><FaGithub /></Link>
              <Link to="https://www.instagram.com/el_arlequin_/" className="text-dark mx-2"><FaInstagram /></Link>
              <Link to="https://www.linkedin.com/in/alfredo-hdz-noriega/" className="text-dark mx-2"><FaLinkedin /></Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;