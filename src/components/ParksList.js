import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class ParksList extends Component {
  state = {
    park: {},
  }

  render() {
    console.log("ParksList render()", this.state)
    const parksArray = this.props.parks?.map(park => {
      return (
        <Card style={{ width: '18rem' }} key={park.name} className={"m3"} >
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

const mapDispatchToProps = (dispatch, park) => {
  dispatch({type: "UPDATE_CURRENT_VIEW"});
}

export default connect(null, mapDispatchToProps)(ParksList);