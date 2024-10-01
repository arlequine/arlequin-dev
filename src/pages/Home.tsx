import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FlipCard from "../components/FlipCard/FlipCard";
import ArlequinImg from "../assets/arlequin.png";
// import { ReactTyped } from "react-typed";
import "./home.css";

const Home = () => {
  return (
    <>
      <section className="p-5 hero">
        <Container>
          <Row>
            <Col md={6} className="d-none d-md-block">
              <FlipCard />
            </Col>
            <Col sm={12} md={6} className="d-flex flex-column justify-content-center">
              <h1 className="display-1">
                {/* I'm a{" "}
                <ReactTyped
                  strings={["Developer", "Writer", "Designer"]}
                  typeSpeed={100}
                  loop
                  backSpeed={20}
                  cursorChar=">"
                  showCursor={true}
                /> */}
                Arlequin Dev
              </h1>
              <p className="display-5">full-stack developer</p>
            </Col>
          </Row>
          <Row className="d-block d-md-none">
            <Col className="d-flex justify-content-center">
              <img src={ArlequinImg} alt="Arlequin" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="my-5">
        <Container>
          <h2 className="text-center">Sobre mí</h2>
          <Row>
            <Col>
              <p>
                Soy ingeniero en sistemas, graduado de un bootcamp de desarrollo full-stack, con siete años de experiencia en la industria. Durante este tiempo, he dedicado cinco años al desarrollo frontend, participando en proyectos que van desde comercio electrónico hasta soluciones SaaS y aplicaciones financieras. He trabajado en iniciativas relacionadas con tarjetas de crédito, sistemas de pagos en línea, y proyectos centrados en la prevención de lavado de dinero y fraude.
              </p>
              <p>
                En cuanto a mis habilidades técnicas, tengo experiencia desarrollando con JavaScript puro y frameworks como Polymer, React y Vue, además de un sólido dominio de tecnologías web esenciales como HTML y CSS. También poseo conocimientos en desarrollo backend con Ruby on Rails y Python.
              </p>
              <p>
                He realizado pruebas unitarias utilizando Jest, Mocha y Chai, y he trabajado con herramientas de control de versiones como Git, utilizando GitHub o Bitbucket como repositorios. Asimismo, he empleado Jenkins y Sonar para asegurar la calidad del código. A lo largo de mi carrera, he trabajado principalmente bajo metodologías Agile y Scrum.
              </p>
              <p>
                Soy una persona proactiva y comunicativa, siempre en búsqueda de crecimiento y aprendizaje constante. Además, disfruto compartir mis conocimientos con los demás, algo que aplico en mi día a día.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;