// import './App.css';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import { Component } from 'react';
import { fetchParks } from './actions/parksActions';
import { addParkToUserList } from './actions/parksActions';
import { removeParkFromUserList } from './actions/parksActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import ParksContainer from './components/containers/ParksContainer';
import HomeCarousel from './components/presentational/HomeCarousel';
import About from './components/static/About';
import AuthFormContainer from './components/containers/AuthFormContainer';
import AdminContainer from './components/containers/AdminContainer';

class App extends Component {

  state = {
    showAuth: false,
  }

  componentDidMount() {
    this.props.fetchParks()
  }

  renderParks = () => {
    this.setState({
      renderParksContainer: true,
      renderHomeCarousel: false,
    })
  }

  handleAuthOpen = () => {
    this.setState({
      showAuth: true
    })
  }

  handleAuthClose = () => {
    this.setState({
      showAuth: false
    })
  }

  renderAdmin = () => {

    return (
      <LinkContainer to="/admin">
        <Nav.Link>Admin</Nav.Link>
      </LinkContainer>
    )
  }

  render() {
    console.log("App Props", this.props)
    return (
      <Router>
        <div className="App">
          {/* Bootstrap navbar */}
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  alt="ParkList"
                  src="https://i.ibb.co/zHXHSHY/Park-List-500x500.png"
                  width="100"
                  height="100"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/parks">
                    <Nav.Link>Parks</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/about">
                    <Nav.Link>About</Nav.Link>
                  </LinkContainer>
                  {this.props.currentUser === undefined ? null : this.renderAdmin()}
                </Nav>
                <Nav>
                  <Nav.Link
                    className="justify-content-end"
                    onClick={this.handleAuthOpen}
                  >
                    {this.props.currentUser ? this.props.currentUser.email : "Login"}
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* Bootstrap Offcanvas Form */}
          <Offcanvas
            show={this.state.showAuth}
            onHide={this.handleAuthClose}
            placement='end'
            backdrop={false}
            scroll={true}
          >
            <Offcanvas.Header closeButton>
              {this.props.currentUser ?
                <Button
                  variant="outline-danger"
                  onClick={this.props.logoutUser}
                >
                  Logout
                </Button> : null}
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <AuthFormContainer
                currentUser={this.props.currentUser}
                removeParkFromUserList={this.props.removeParkFromUserList}
              />
            </Offcanvas.Body>
          </Offcanvas>

          {/* React route declarations */}
          <Container className="body-content justify-content-center">
            <Switch>
              <Route path="/parks">
                <ParksContainer
                  parks={this.props.parks}
                  loading={this.props.loading}
                  currentUser={this.props.currentUser}
                  addParkToUserList={this.props.addParkToUserList}
                />
              </Route>
              <Route path="/admin">
                <AdminContainer />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <HomeCarousel parks={this.props.parks} />
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    parks: state.parks,
    loading: state.loading,
    currentUser: state.currentUser,
    authLoading: state.authLoading,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchParks: () => dispatch(fetchParks()),
    logoutUser: () => dispatch({ type: "USER_LOGOUT" }),
    addParkToUserList: (info) => dispatch(addParkToUserList(info)),
    removeParkFromUserList: (info) => dispatch(removeParkFromUserList(info)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);