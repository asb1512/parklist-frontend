import React, {Component} from 'react';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class Park extends Component {

  render() {
    console.log("Modal", this.props.park)
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
          <Button variant="primary" onClick={this.props.closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

export default Park;