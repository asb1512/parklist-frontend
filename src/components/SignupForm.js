import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function SignupForm(props) {
  console.log("SignupForm props", props)
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
        <Button
          className="pl-green-bg rounded-pill no-border"
          onClick={props.userSignup({ email: email, bio: bio })}
        >
          Sign up
        </Button>
      </Container>
    </Form>
  );
};