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

  return (
    <Container>
      <Row>
        {props.loading ? <div>Loading...</div> : null}
        <Col>
          <ParksList
            parks={props.parks?.slice(0, 21)}
            showPark={showParkModal}
          />
        </Col>
        <Col>
          <ParksList
            parks={props.parks?.slice(21, 42)}
            showPark={showParkModal}
          />
        </Col>
        <Col>
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
          {<div>Hello.</div>}
        </Route>
      </Switch>
    </Container>
    );
};

export default ParksContainer;