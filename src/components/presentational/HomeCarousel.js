import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

export default function HomeCarousel(props) {

  const parentStyle = {
    position: 'relative',
    textAlign: 'center',
  }

  const childStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }

  const parksArray = this.props.parks?.map(park => {
    return (
      <Carousel.Item
        interval={5000}
        key={park.name}
        style={parentStyle}
      >
        <img
          className="d-block w-100"
          src={park.image}
          alt={park.name}
        />
        <Carousel.Caption style={childStyle}>
          <h3>{park.name} National Park</h3>
          <p>{park.location}</p>
        </Carousel.Caption>
      </Carousel.Item>
    )
  })

  return (
    <Container fluid className={"m0"}>
      <Carousel>
        {parksArray}
      </Carousel>
    </Container>
  )
}