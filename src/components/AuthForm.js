import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default function AuthForm() {
  return (
    <Tabs defaultActiveKey="profile" className="mb-3">
      <Tab eventKey="home" title="Login">
        
      </Tab>
      <Tab eventKey="profile" title="Signup">
        
      </Tab>
    </Tabs>
  )
};