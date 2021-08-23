import React, { Component } from 'react';
import ParksList from './ParksList';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ParksContainer extends Component {

  render() {
    console.log("Parks Container Render", this.props.parks)
    return (
      <Container>
        <Row>
          <Col>
            <ParksList parks={this.props.parks.slice(0,21)} />
          </Col>
          <Col>
            <ParksList parks={this.props.parks.slice(21,42)} />
          </Col>
          <Col>
            <ParksList parks={this.props.parks.slice(42)} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ParksContainer;