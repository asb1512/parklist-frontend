import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

class HomeCarousel extends Component {

  render() {
    console.log("HomeCarousel render()", this.props.parks)
    const parksArray = this.props.parks?.map(park => {
      return (
        <Carousel.Item interval={2000} key={park.name}>
          <img
            className="d-block w-100"
            src={park.image}
            alt={park.name}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })

    return (
      <Carousel>
        {parksArray}
      </Carousel>
    )
  }
}

export default HomeCarousel;