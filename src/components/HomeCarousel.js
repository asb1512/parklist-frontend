import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

class HomeCarousel extends Component {

  render() {
    console.log("HomeCarousel render()", this.props.parks)
    const parksArray = this.props.parks?.map(park => {
      return (
        <Carousel.Item interval={5000} key={park.name}>
          <img
            className="d-block w-100"
            src={park.image}
            alt={park.name}
          />
          <Carousel.Caption>
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
}

export default HomeCarousel;