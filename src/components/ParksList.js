import React, { Component } from 'react';

// import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// import Park from './Park';



class ParksList extends Component {

  

  // renderPark = (park) => {
  //   return (
  //     <Container style={{ zIndex: 100 }} >
  //       <Park park={park} />
  //     </Container>
  //   )
  // }

  render() {

    const parksArray = this.props.parks?.map(park => {
      return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={park.small_image} alt={park.name} />
          <Card.Body>
            <Card.Title>{park.name}</Card.Title>
            <Card.Text>
              Located in {park.location}
            </Card.Text>
            <Button
              // onClick={(park) => this.renderPark(park)}
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