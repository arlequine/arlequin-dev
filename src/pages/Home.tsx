import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import FlipCard from "../components/FlipCard/FlipCard";
import { useQuery, gql } from '@apollo/client';
import Timeline from '../components/Timeline/Timeline';
import ContactForm from '../components/ContactForm/ContactForm';
import ArlequinLogo from '../assets/arlequin-logo.svg'
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
            <Col className="d-flex justify-content-center">
              <img src={ArlequinLogo} alt="Arlequin" className="img-fluid" />
            </Col>
            <Col sm={12} md={6} className="d-flex flex-column justify-content-center">
              <h1 className="display-3 font-weight-bold">Arlequin Dev</h1>
              <p className="lead">Full-stack developer</p>
              <Button variant="primary" onClick={handleDownload} className="mt-3 custom-btn">
                Descargar CV
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="my-5">
        <Container>
          <h2 className="text-center mb-4">Sobre mí</h2>
          <Row>
            <Col xs={12} md={6} lg={6} className="mx-auto">
            <p className="about-me text-center">
              Soy un <strong>Desarrollador Full-Stack</strong> con experiencia en la creación y gestión de sitios web, aplicaciones web y aplicaciones móviles que impulsan el éxito de los productos.
            </p>
            <p className="about-me text-center">
              También disfruto compartir lo que he aprendido a lo largo de los años en el desarrollo web. Me apasiona enseñar, y he tenido la oportunidad de hacerlo en comunidades y bootcamps de desarrollo. No dudes en conectarte o seguirme en mi <a href="https://www.linkedin.com/in/alfredo-hdz-noriega/" target="_blank">LinkedIn</a> e <a href="https://www.instagram.com/el_arlequin_/" target="_blank">Instagram</a>, donde comparto contenido útil relacionado con el <strong>desarrollo web y la programación.</strong>
            </p>
            <p className="about-me text-center">
              Estoy abierto a nuevas oportunidades laborales en las que pueda contribuir, aprender y crecer profesionalmente. Si tienes una oportunidad que se alinee con mis habilidades y experiencia, no dudes en contactarme.
            </p>
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
            <Col xs={12} md={6} lg={6} className="mx-auto">
              <Timeline experiences={experiences} />
            </Col>
            <Col xs={12} md={6} lg={6} className="mx-auto d-none d-md-block" >
              <div className="scroll-svg-container">
                <FlipCard />
              </div>
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