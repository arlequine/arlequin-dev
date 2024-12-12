import React, { useState } from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a un servidor
    console.log('Datos del formulario:', formData);
  };

  return (
    <Container>
      <Row>
      <h3>Contáctame</h3>
        <Col md={12}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Correo:</Form.Label>
              <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            </Form.Group>
            <Form.Group controlId="formMessage">
            <Form.Label>Mensaje:</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
                />
              </Form.Group>
              <Button className="mt-3" variant="primary" type="submit">
                Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;