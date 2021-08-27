import {connect} from 'react-redux';
import UserList from "../presentational/UserList";

function AdminContainer() {
  return (
    <>
      <UserList />
    </>
  )
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect()(AdminContainer);