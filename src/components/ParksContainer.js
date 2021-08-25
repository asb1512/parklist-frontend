import React, { useState } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import ParksList from './ParksList';
import Park from './Park';
// import apiResponse from './apiResponse';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

function ParksContainer(props) {

  let match = useRouteMatch();

  const [park, setPark] = useState({});
  const [showPark, setShowPark] = useState(false);

  const showParkModal = (park) => {
    setPark(park);
    setShowPark(true);
    window.history.pushState({'page_name': 'parks'}, '', '/parks');
  };

  const closeModal = () => {
    setPark({});
    setShowPark(false);
    window.history.back();
  };

  const spinnerWheel = () => {
    return (
      <Container className="justify-content-center">
        <Col>
          <Row>
            <Spinner
              className="justify-content-center"
              animation="border"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Row>
        </Col>
      </Container>
    );
  };

  const parkColumns = () => {
    return (
      <Container className="justify-content-center">
        <Row>
          <Col className="p0" >
            <ParksList
              parks={props.parks?.slice(0, 21)}
              showPark={showParkModal}
            />
          </Col>
          <Col className="p0" >
            <ParksList
              parks={props.parks?.slice(21, 42)}
              showPark={showParkModal}
            />
          </Col>
          <Col className="p0" >
            <ParksList
              parks={props.parks?.slice(42)}
              showPark={showParkModal}
            />
          </Col>
        </Row>
        <Park
          park={park}
          show={showPark}
          closeModal={closeModal}
        />

        <Switch>
          <Route path={`${match.path}/:parkName`}>
            {null}
          </Route>
        </Switch>
    </Container>
    );
  };

  if (props.parks) {
    return parkColumns();
  } else {
    return spinnerWheel();
  }
};

export default ParksContainer;