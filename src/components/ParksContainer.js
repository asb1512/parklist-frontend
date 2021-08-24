import React, { Component } from 'react';
import ParksList from './ParksList';
import Park from './Park';
// import apiResponse from './apiResponse';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ParksContainer extends Component {

  state = {
    park: {},
    showParkModal: false,
  }

  showParkModal(park) {
    this.setState({
      park: park,
      showParkModal: true,
    })
  }

  closeModal = () => {
    this.setState({
      park: {},
      showParkModal: false
    })
  }

  render() {
    return (
      <Container>
        <Row>
          {this.props.loading ? <div>Loading...</div> : null}
          <Col>
            <ParksList
              parks={this.props.parks?.slice(0,21)}
              showPark={this.showParkModal.bind(this)}
            />
          </Col>
          <Col>
            <ParksList
              parks={this.props.parks?.slice(21,42)}
              showPark={this.showParkModal.bind(this)}
            />
          </Col>
          <Col>
            <ParksList
              parks={this.props.parks?.slice(42)}
              showPark={this.showParkModal.bind(this)}
            />
          </Col>
        </Row>
        <Park
          park={this.state.park}
          show={this.state.showParkModal}
          closeModal={this.closeModal.bind(this)}
        />
      </Container>
    )
  }
}

export default ParksContainer;