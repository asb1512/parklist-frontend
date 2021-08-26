import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignup } from '../actions/parksActions';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

class AuthFormContainer extends Component {
  render() {

    const userAuth = () => {
      return (
        <Tabs defaultActiveKey="login" className="mb-3">
          <Tab eventKey="login" title="Login">
            <LoginForm />
          </Tab>
          <Tab eventKey="signup" title="Signup">
            <SignupForm userSignup={this.props.userSignup} />
          </Tab>
        </Tabs>
      )
    }

    const userLists = () => {
      return (
        <Tabs defaultActiveKey="visited" className="mb-3">
          <Tab eventKey="visited" title="Visited">
            <LoginForm />
          </Tab>
          <Tab eventKey="want-to-visit" title="Want to Visit">
            <SignupForm userSignup={this.props.userSignup} />
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
    userSignup: (user) => dispatch(userSignup(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthFormContainer);