import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import FlipCard from "../components/FlipCard/FlipCard";
import ArlequinImg from "../assets/arlequin.png";
import { useQuery, gql } from '@apollo/client';
import "./home.css";

const Home = () => {

  const { data } = useQuery(query);
  console.log(data)
  const handleDownload = () => {
    // Aquí puedes agregar la lógica para descargar el CV
    const link = document.createElement('a');
    link.href = data.cv.filePdf.url; // Reemplaza con la ruta correcta a tu CV
    link.download = 'CV_Fredo.pdf'; // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="p-5 hero text-center">
        <Container>
          <Row>
            <Col md={6} className="d-none d-md-block">
              <FlipCard />
            </Col>
            <Col sm={12} md={6} className="d-flex flex-column justify-content-center">
              <h1 className="display-3 font-weight-bold">Arlequin Dev</h1>
              <p className="lead">Full-stack developer</p>
              <Button variant="primary" onClick={handleDownload} className="mt-3 custom-btn">
                Descargar CV
              </Button>
            </Col>
          </Row>
          <Row className="d-block d-md-none">
            <Col className="d-flex justify-content-center">
              <img src={ArlequinImg} alt="Arlequin" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="my-5">
        <Container>
          <h2 className="text-center mb-4">Sobre mí</h2>
          <Row>
            <Col xs={12} md={10} lg={8} className="mx-auto">
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Text>
                    Soy ingeniero en sistemas, graduado de un bootcamp de desarrollo full-stack, con ocho años de experiencia en la industria. Durante este tiempo, he dedicado cinco años al desarrollo frontend, participando en proyectos que van desde comercio electrónico hasta soluciones SaaS y aplicaciones financieras. He trabajado en iniciativas relacionadas con <strong>tarjetas de crédito</strong>, <strong>sistemas de pagos en línea</strong>, y proyectos centrados en la <strong>prevención de lavado de dinero</strong> y <strong>fraude</strong>.
                  </Card.Text>
                  <Card.Text>
                    En cuanto a mis habilidades técnicas, tengo experiencia desarrollando con <strong>JavaScript</strong> puro y frameworks como <strong>Polymer</strong>, <strong>React</strong> y <strong>Vue</strong>, además de un sólido dominio de tecnologías web esenciales como <strong>HTML</strong> y <strong>CSS</strong>. También poseo conocimientos en desarrollo backend con <strong>Ruby on Rails</strong> y <strong>Python</strong>.
                  </Card.Text>
                  <Card.Text>
                    He realizado pruebas unitarias utilizando <strong>Jest</strong>, <strong>Mocha</strong> y <strong>Chai</strong>, y he trabajado con herramientas de control de versiones como <strong>Git</strong>, utilizando <strong>GitHub</strong> o <strong>Bitbucket</strong> como repositorios. Asimismo, he empleado <strong>Jenkins</strong> y <strong>Sonar</strong> para asegurar la calidad del código. A lo largo de mi carrera, he trabajado principalmente bajo metodologías <strong>Agile</strong> y <strong>Scrum</strong>.
                  </Card.Text>
                  <Card.Text>
                    Soy una persona proactiva y comunicativa, siempre en búsqueda de crecimiento y aprendizaje constante. Además, disfruto compartir mis conocimientos con los demás, algo que aplico en mi día a día.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;

const query = gql`
  query {
    cv(id: "3laPmLkWSokeIzzKZWOATf") {
      title
      filePdf {
        url
      }
    }
  }
`