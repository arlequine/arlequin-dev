import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import FlipCard from "../components/FlipCard/FlipCard";
import ArlequinImg from "../assets/arlequin.png";
import { useQuery, gql } from '@apollo/client';
import Timeline from '../components/Timeline/Timeline';
import ContactForm from '../components/ContactForm/ContactForm';

import "./home.css";


const experiences = [
  {
    company: "Garrido Licona y asociados",
    role: "Desarrollador Fullstack",
    period: "2024",
    details: [
      "Desarrollo de aplicaciones web utilizando React.",
      "Desarrollo de aplicaciones móviles utilizando React Native."
    ],
    active: true
  },
  {
    company: "Sye Software",
    role: "Desarrollador Sr Frontend",
    period: "2024",
    active: false,
    details: [
      "Uso de metodologias agiles como SCRUM",
      "Desarrollo de aplicaciones web utilizando Svelte.",
      "Entendimiento de requerimientos con stakeholders.",
      "Gestion de equipo de desarrollo.",
      "Uso de metodologias agiles como SCRUM"
    ]
  },
  {
    company: "Plexus",
    role: "Desarrollador Sr Frontend",
    period: "2023 - 2024",
    active: false,
    details: [
      "Desarrollo de aplicaciones web utilizando lit-element.",
      "Desarrollo de aplicaciones móviles utilizando tecnologías web (HTML, CSS, JavaScript).",
      "Entendimiento de requerimientos con stakeholders.",
      "Gestion de equipo de desarrollo.",
      "Uso de metodologias agiles como SCRUM"
    ]
  },
  {
    company: "Veradat",
    role: "Desarrollador Frontend",
    period: "2023",
    active: false,
    details: [
      "Desarrollo de aplicaciones web utilizando React.",
      "Entendimiento de requerimientos con stakeholders.",
      "Uso de metodologias agiles como SCRUM"
    ]
  },
  {
    company: "Kushki",
    role: "Desarrollador Frontend",
    period: "2021 - 2023",
    active: false,
    details: [
      "Lider del equipo Web.",
      "Desarrollo de aplicaciones web utilizando React.",
      "Entendimiento de requerimientos con stakeholders.",
      "Gestion de equipo de desarrollo.",
      "Uso de metodologias agiles como SCRUM/Kanban"
    ]
  },
  {
    company: "Pulpomatic",
    role: "Desarrollador Frontend",
    period: "2019 - 2021",
    active: false,
    details: [
      "Desarrollo de aplicaciones web utilizando Vue.",
      "Entendimiento de requerimientos con stakeholders.",
      "Mantenimiento de apis con Node.js",
      "Uso de metodologias agiles como SCRUM"
    ]
  },
  {
    company: "BBVA Next Technologies",
    role: "Desarrollador Frontend",
    period: "2018 - 2019",
    active: false,
    details: [
      "Desarrollo de aplicaciones web utilizando React.",
      "Entendimiento de requerimientos con stakeholders.",
      "Gestion de equipo de desarrollo.",
      "Uso de metodologias agiles como SCRUM"
    ]
  },
  {
    company: "Ben & Frank",
    role: "Desarrollador Web Jr",
    period: "2016 - 2018",
    active: false,
    details: [
      "Desarrollo de aplicaciones para mejora de operaciones de la empresa.",
      "Entendimiento de requerimientos con stakeholders."
    ]
  },
];

const Home = () => {

  const { data } = useQuery(query);
  const handleDownload = () => {
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
            <Col xs={12} md={6} lg={6} className="mx-auto">
              <p className="about-me text-center">Soy un <strong>Desarrollador full-stack</strong> que crea y administra sitios web y aplicaciones web al igual que aplicaciones moviles que conducen al éxito del producto general. </p>
              <p className="about-me text-center">También me gusta compartir lo que he aprendido a lo largo de los años en el desarrollo web asi que tambien me gusta enseñar, llevo unos años enseñando en comunidades y bootcamps de desarrollo. No dudes en conectarte o seguirme en mi <a href="https://www.linkedin.com/in/alfredo-hdz-noriega/" target="_blank">Linkedin</a> e <a href="https://www.instagram.com/el_arlequin_/" target="_blank">Instagram</a>, donde publico contenido útil relacionado con el <strong>desarrollo web y la programación.</strong></p>
              <p className="about-me text-center">Estoy abierto a oportunidades laborales en las que pueda contribuir, aprender y crecer. Si existe una buena oportunidad que coincida con mis habilidades y experiencia, no dudes en contactarme.</p>
            </Col>
            <Col xs={12} md={6} lg={6} className="mx-auto">
              <h3>Habilidades</h3>
              <Badge className="badge-skill">Javascript</Badge>
              <Badge className="badge-skill">Typescript</Badge>
              <Badge className="badge-skill">React</Badge>
              <Badge className="badge-skill">React Native</Badge>
              <Badge className="badge-skill">Lit-element</Badge>
              <Badge className="badge-skill">Angular</Badge>
              <Badge className="badge-skill">Node.js</Badge>
              <Badge className="badge-skill">HTML</Badge>
              <Badge className="badge-skill">CSS</Badge>
              <Badge className="badge-skill">SASS</Badge>
              <Badge className="badge-skill">Tailwind</Badge>
              <Badge className="badge-skill">Svelte</Badge>
              <Badge className="badge-skill">AWS/Amplify</Badge>
              <Badge className="badge-skill">GraphQL</Badge>
              <Badge className="badge-skill">Apollo</Badge>
              <Badge className="badge-skill">Ruby on Rails</Badge>
              <Badge className="badge-skill">Python</Badge>
              <Badge className="badge-skill">FastApi</Badge>
              <Badge className="badge-skill">Git</Badge>
              <Badge className="badge-skill">Jira</Badge>
              <Badge className="badge-skill">Scrum</Badge>
              <Badge className="badge-skill">Kanban</Badge>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="my-5">
        <Container>
          <h2 className="text-center mb-4">Proyectos en los que he participado</h2>
          <Row>
            <Col xs={12} md={10} lg={8} className="mx-auto">
              <Timeline experiences={experiences} />
            </Col>
          </Row>
        </Container>
      </section>

    
    <section className="my-5">
      <ContactForm />
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