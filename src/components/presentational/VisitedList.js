import ListGroup from 'react-bootstrap/ListGroup';

export default function VisitedList(props) {

  const visitedParksList = props.visitedParks?.map(visitedPark => {
    let result = props.allParks.filter(park => visitedPark.park_id === park.id);
    console.log("matching park", result[0])
    return (
      <ListGroup.Item>{result[0].name} National Park</ListGroup.Item>
    )
  })

  return (
    <div>
      <ListGroup>
        {visitedParksList}
        <ListGroup.Item active>
          {props.visitedParks.length}/63 parks visited
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}