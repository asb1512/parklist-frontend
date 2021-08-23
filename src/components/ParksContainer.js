import React, { Component } from 'react';
import ParksList from './ParksList';
// import apiResponse from './apiResponse';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ParksContainer extends Component {

  render() {
    console.log("Parks Container Render", this.props.parks)
    // this return statement to be used when Rails API is actually working
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

    // use this return statement when the Rails API isn't working properly
    // return (
    //   <Container>
    //     <Row>
    //       <Col>
    //         <ParksList parks={apiResponse.slice(0,21)} />
    //       </Col>
    //       <Col>
    //         <ParksList parks={apiResponse.slice(21,42)} />
    //       </Col>
    //       <Col>
    //         <ParksList parks={apiResponse.slice(42)} />
    //       </Col>
    //     </Row>
    //   </Container>
    // )
  }
}

export default ParksContainer;