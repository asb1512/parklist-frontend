import ListGroup from 'react-bootstrap/ListGroup';

export default function WantToVisitList(props) {

  const desiredParksList = props.desiredParks?.map(desiredPark => {
    let result = props.allParks.filter(park => desiredPark.park_id === park.id);
    console.log("matching park", result[0])
    return (
      <ListGroup.Item>{result[0].name} National Park</ListGroup.Item>
    )
  })

  return (
    <div>
      <ListGroup>
        {desiredParksList}
      </ListGroup>
    </div>
  )
}