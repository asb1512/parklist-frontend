import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Park from './Park';



class ParksList extends Component {

  renderPark = (park) => {
    console.log(`${park.name} got clicked!`)
    return (
        <Park park={park} />
    )
  }

  render() {

    const parksArray = this.props.parks?.map(park => {
      return (
        <Card style={{ width: '18rem' }} key={park.name} >
          <Card.Img variant="top" src={park.small_image} alt={park.name} />
          <Card.Body>
            <Card.Title>{park.name}</Card.Title>
            <Card.Text>
              Located in {park.location}
            </Card.Text>
            <Button
              onClick={() => this.renderPark(park)}
              variant="primary"
              className="rounded-pill"
            >Discover
            </Button>
          </Card.Body>
        </Card>
        )
      })

    return (
      <div>
        {parksArray}
      </div>
    )
  }
};

export default ParksList;