import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function AuthForm() {
  return (
    <Tabs defaultActiveKey="login" className="mb-3">
      <Tab eventKey="login" title="Login">
        {LoginForm()}
      </Tab>
      <Tab eventKey="signup" title="Signup">
        {SignupForm()}
      </Tab>
    </Tabs>
  );
};

function LoginForm() {

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

function SignupForm() {

  const [email, setEmail] = useState('')
  const [bio, setBio] = useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleBioChange = event => {
    setBio(event.target.value);
  }

  return (
    <Form>
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

      <Form.Group className="mb-3">
        <FloatingLabel label="Enter your bio">
          <Form.Control
            as="textarea"
            placeholder="Tell us a bit about yourself"
            style={{ height: '100px' }}
            onChange={event => handleBioChange(event)}
            value={bio}
          />
        </FloatingLabel>
      </Form.Group>

      <Container className="d-grid">
        <Button className="pl-green-bg rounded-pill no-border">
          Sign up
        </Button>
      </Container>
    </Form>
  );
};