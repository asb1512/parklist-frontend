import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FloatingLabel } from 'react-bootstrap';

export default function AuthForm() {
  return (
    <Tabs defaultActiveKey="login" className="mb-3">
      <Tab eventKey="login" title="Login">
        {loginForm()}
      </Tab>
      <Tab eventKey="signup" title="Signup">
        {signupForm()}
      </Tab>
    </Tabs>
  );
};

function loginForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <FloatingLabel label='Enter email'>
          <Form.Control type="email" placeholder="Enter email" />
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

function signupForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <FloatingLabel label='Enter email'>
          <Form.Control type="email" placeholder="Enter email" />
        </FloatingLabel>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Container className="d-grid">
        <Button className="pl-green-bg rounded-pill no-border">
          Sign up
        </Button>
      </Container>
    </Form>
  );
};