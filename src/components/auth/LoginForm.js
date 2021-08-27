import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function LoginForm(props) {

  const [email, setEmail] = useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleOnSubmit = event => {
    event.preventDefault();
    props.authenticateUser({ email: email })
  }

  return (
    <Form onSubmit={event => handleOnSubmit(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <FloatingLabel label='Enter email'>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={event => handleEmailChange(event)}
            value={email}
          />
        </FloatingLabel>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Container className="d-grid">
        <Button
          className="pl-green-bg rounded-pill no-border"
          type="submit"
        >
          Login
        </Button>
      </Container>
    </Form>
  );
};