import React, { Component } from 'react';
import ParksList from './ParksList';
// import apiResponse from './apiResponse';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ParksContainer extends Component {

  render() {
    return (
      <Container>
        <Row>
          {this.props.loading ? <div>Loading...</div> : null}
          <Col>
            <ParksList
              parks={this.props.parks?.slice(0,21)}
              buttonClick={this.props.buttonClick}
            />
          </Col>
          <Col>
            <ParksList
              parks={this.props.parks?.slice(21,42)}
              buttonClick={this.props.buttonClick}
            />
          </Col>
          <Col>
            <ParksList
              parks={this.props.parks?.slice(42)}
              buttonClick={this.props.buttonClick}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ParksContainer;