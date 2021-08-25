import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { useRouteMatch } from 'react-router-dom';


function ParksList(props) {
  let match = useRouteMatch();

  const formatPathName = (str) => {
    return str.replace(/\s/g , "-").toLowerCase();
  }

  const parksArray = props.parks?.map(park => {
    return (
      <Card style={{ width: '18rem' }} key={park.name} className={"m3"} >
        <Card.Img variant="top" src={park.small_image} alt={park.name} />
        <Card.Body>
          <Card.Title>{park.name}</Card.Title>
          <Card.Text>
            Located in {park.location}
          </Card.Text>
            <LinkContainer to={`${match.url}/${formatPathName(park.name)}`}>
              <Button
                onClick={() => props.showPark(park)}
                variant="primary"
                className="rounded-pill"
              >Discover
              </Button>
            </LinkContainer>
        </Card.Body>
      </Card>
      )
    })
      
    return (
      <div>
        {parksArray}
      </div>
    )
  }

export default ParksList;