import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticateUser } from '../../actions/parksActions';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import LoginForm from '../auth/LoginForm';
import SignupForm from '../auth/SignupForm';
import VisitedList from '../presentational/VisitedList';
import WantToVisitList from '../presentational/WantToVisitList';

class AuthFormContainer extends Component {
  render() {

    const userAuth = () => {
      return (
        <Tabs defaultActiveKey="login" className="mb-3">
          <Tab eventKey="login" title="Login">
            <LoginForm authenticateUser={this.props.authenticateUser} />
          </Tab>
          <Tab eventKey="signup" title="Signup">
            <SignupForm authenticateUser={this.props.authenticateUser} />
          </Tab>
        </Tabs>
      )
    }

    const userLists = () => {
      return (
        <Tabs defaultActiveKey="visited" className="mb-3">
          <Tab eventKey="visited" title="Visited">
            <VisitedList />
          </Tab>
          <Tab eventKey="want-to-visit" title="Want to Visit">
            <WantToVisitList />
          </Tab>
        </Tabs>
      )
    }

    return (
      <>
        {this.props.currentUser ? userLists() : userAuth()}
      </>
    );
  };
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    authLoading: state.authLoading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authenticateUser: (user) => dispatch(authenticateUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthFormContainer);