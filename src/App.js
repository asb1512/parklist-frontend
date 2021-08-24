// import './App.css';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Component } from 'react';
import { fetchParks } from './actions/parksActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ParksContainer from './components/ParksContainer';
import HomeCarousel from './components/HomeCarousel';

class App extends Component {

  state = {
    park: {},
    showParkModal: false,
  }

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
                  <Nav.Link>
                    <Link
                      to="/"
                      style={{ textDecoration: "none" }}
                      className="text-secondary"
                    >
                    Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      to="/parks"
                      style={{ textDecoration: "none" }}
                      className="text-secondary"
                    >
                    Parks
                    </Link>
                  </Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* React route declarations */}
          <Switch>
            <Route path="/parks">
              <ParksContainer
                parks={this.props.parks}
                loading={this.props.loading}
                buttonClick={this.renderParkModal.bind(this)}
              />
            </Route>
            <Route path="/">
              <HomeCarousel parks={this.props.parks} />
            </Route>
          </Switch>
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