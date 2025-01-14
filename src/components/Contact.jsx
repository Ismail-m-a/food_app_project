import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';


const ContactForm = () => {
  return (
    <Container className="mt-5">
      <div className=" text-center contact-text">
        <h3>Contact us</h3>
        <p className='text-center'> 
          To contact us, please fyll the form below, we'll reply as soon as possible
        </p>
      </div>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form className='contact-form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" required placeholder="Name" />
            </Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" required placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" required rows={3} placeholder="Your message" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
