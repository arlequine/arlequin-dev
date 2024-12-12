import React, { useEffect, useRef } from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { TimelineProps } from '../../utils/types';
import './styles.css';

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach((item) => observer.observe(item));

    return () => {
      timelineItems?.forEach((item) => observer.unobserve(item));
    };
  }, [experiences]);

  return (
    <Container className="py-5" ref={timelineRef}>
      <Row className="justify-content-center">
        <Col md={12}>
          <Card className="card-timeline">
            <Card.Body>
              <ListGroup className="timeline">
                {experiences.map((exp, index) => (
                  <ListGroup.Item 
                    key={index} 
                    className="timeline-item"
                    style={{ 
                      '--delay': index 
                    } as React.CSSProperties}
                  >
                    <div className="timeline-icon"></div>
                    <div className="timeline-content">
                      <h5 className="fw-bold">{exp.company}</h5>
                      <p className="text-muted mb-2 fw-bold">{exp.role} ({exp.period})</p>
                      <ul>
                        {exp.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
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