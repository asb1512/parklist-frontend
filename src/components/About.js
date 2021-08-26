import Container from 'react-bootstrap/Container';

function About() {
  return (
    <Container md={4}>
      <h1 className="poppins-bold pl-navy">About</h1>
      <p className="poopins-thin">
        At ParkList, we have a love for nature and the beauty provided by our 
        national park system. We believe that everyone should visit as many of 
        the parks our nation has to offer as they can. And we're here to help 
        you keep track of it all!
      </p>
    </Container>
  )
};

export default About;