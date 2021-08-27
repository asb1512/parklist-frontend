import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/parksActions';
import UserList from "../presentational/UserList";

class AdminContainer extends Component {

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <>
        <UserList users={this.props.users} />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);