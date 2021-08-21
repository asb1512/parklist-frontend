import React, { Component } from 'react';
import ParksList from './ParksList';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ParksContainer extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col>
          {this.props.loading ?
            "Loading" : <ParksList parks={this.props.parks} loading={this.props.loading} />
          }
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ParksContainer;