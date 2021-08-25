import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
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
  }

  const closeModal = () => {
    setPark({});
    setShowPark(false)
  }

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
          {}
        </Route>
      </Switch>
    </Container>
    );
};

export default ParksContainer;