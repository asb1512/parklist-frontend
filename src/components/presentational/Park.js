import React, {Component} from 'react';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';


class Park extends Component {

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.closeModal}
        fullscreen
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.park.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={this.props.park.image} fluid />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.closeModal}>
            Close
          </Button>
          <ButtonGroup>
            <Button variant="success">
              Visited
            </Button>
            <Button variant="warning">
              Want to
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default Park;