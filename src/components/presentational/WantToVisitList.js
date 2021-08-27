import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';

export default function WantToVisitList(props) {

  const desiredParksList = props.desiredParks?.map(desiredPark => {
    let result = props.allParks.filter(park => desiredPark.park_id === park.id);
    console.log("matching park", result[0])

    const handleParkremoval = () => {
      props.removeParkFromUserList({
        desired: true,
        desired_id: desiredPark.id,
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
        {desiredParksList}
      </ListGroup>
    </div>
  )
}