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
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Fade from 'react-bootstrap/Fade';
import ParksContainer from './components/ParksContainer';
import HomeCarousel from './components/HomeCarousel';
import About from './components/About';

class App extends Component {

  componentDidMount() {
    fetchParks();
  }

  renderParks = () => {
    this.setState({
      renderParksContainer: true,
      renderHomeCarousel: false,
    })
  }

  render() {
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
                </Nav>
                <Nav>
                  <Nav.Link className="justify-content-end">
                    Login
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* React route declarations */}
          <Container className="body-content justify-content-center">
            <Switch>
              <Route path="/parks">
                <ParksContainer
                  parks={this.props.parks}
                  loading={this.props.loading}
                />
              </Route>
              <Route path="/about">
                <Fade>
                  <About />
                </Fade>
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
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchParks: () => dispatch(fetchParks()),
  };
};

export default connect(mapStateToProps, fetchParks())(App);