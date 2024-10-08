import React from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { TimelineProps } from '../../utils/types';
import './styles.css';


const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="card-timeline">
            <Card.Body>
              <ListGroup>
                {experiences.map((exp, index) => (
                  <ListGroup.Item key={index}>
                    <h5 className="fw-bold">{exp.company}</h5>
                    <p className="text-muted mb-2 fw-bold">{exp.role} ({exp.period})</p>
                    <ul>
                      {exp.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Timeline