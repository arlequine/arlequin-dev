import React, { useState } from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      
      const result = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        import.meta.env.VITE_PUBLIC_KEY
      );

      setStatus('Mensaje enviado exitosamente');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Error al enviar el mensaje');
      console.error('Error:', error);
    }
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
            {status && <p className="mt-3">{status}</p>}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;