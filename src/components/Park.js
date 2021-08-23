import React, {Component} from 'react';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

class Park extends Component {
  state = {
    show: true,
  }

  handleShow = () => {
    console.log("Park.js/handleShow()")
    this.setState({show: true})
  }

  handleClose = () => {
    console.log("Park.js/handleClose()")
    this.setState({show: false})
  }

  render() {
    console.log("Park render()", this.state.show)
    return (
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
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

export default connect(mapStateToProps, null)(Park);