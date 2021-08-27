import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';

export default function VisitedList(props) {

  const visitedParksList = props.visitedParks?.map(visitedPark => {
    let result = props.allParks.filter(park => visitedPark.park_id === park.id);

    const handleParkremoval = () => {
      props.removeParkFromUserList({
        visited: true,
        visited_id: visitedPark.id,
        user_id: props.currentUser.id,
        park_id: result[0].id
      })
    }

    return (
      <ListGroup.Item>
        {result[0].name} National Park
        <CloseButton
          className="float-end"
          onClick={() => handleParkremoval()}
        />
      </ListGroup.Item>
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