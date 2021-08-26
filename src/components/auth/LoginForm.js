import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function LoginForm() {

  const [email, setEmail] = useState('')

  const handleChange = (event) => {
    setEmail(event.target.value)
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <FloatingLabel label='Enter email'>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={event => handleChange(event)}
            value={email}
          />
        </FloatingLabel>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Container className="d-grid">
        <Button className="pl-green-bg rounded-pill no-border">
          Login
        </Button>
      </Container>
    </Form>
  );
};