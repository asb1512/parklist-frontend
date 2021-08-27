import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';


export default function Park(props) {

  const activeButtons = () => {
    return (
      <ButtonGroup>
        <Button variant="success">
          Visited
        </Button>
        <Button variant="warning">
          Want to
        </Button>
      </ButtonGroup>
    )
  }

  const disabledButtons = () => {
    return (
      <ButtonGroup>
        <Button variant="success" disabled>
          Visited
        </Button>
        <Button variant="warning" disabled>
          Want to
        </Button>
      </ButtonGroup>
    )
  }

  return (
    <Modal
      show={props.show}
      onHide={props.closeModal}
      fullscreen
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.park.name} National Park</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={props.park.image} fluid />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closeModal}>
          Close
        </Button>
        <>
          {props.active ? activeButtons() : disabledButtons()}
        </>
      </Modal.Footer>
    </Modal>
  )
}