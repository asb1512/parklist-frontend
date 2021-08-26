import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignup } from '../actions/parksActions';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

class AuthForm extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="login" className="mb-3">
        <Tab eventKey="login" title="Login">
          <LoginForm />
        </Tab>
        <Tab eventKey="signup" title="Signup">
          <SignupForm userSignup={this.props.userSignup} />
        </Tab>
      </Tabs>
    );
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userSignup: (user) => dispatch(userSignup(user))
  }
}

export default connect(null, mapDispatchToProps)(AuthForm);