// import './App.css';
import { connect } from 'react-redux';
import { Component } from 'react';
import { fetchParks } from './actions/parksActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ParksContainer from './components/ParksContainer';
import Park from './components/Park';

class App extends Component {
  // an attempt force fetch to be called
  // constructor() {
  //   super();
  //   this.state = {
  //     loading: true
  //   }

  //   fetchParks();
  // }

  state = {
    park: {},
    show: false,
  }

  componentDidMount() {
    // if (this.props.parks) {
    //   this.setState({loading: false})
    // } else {
    //   this.setState({loading: true})
    // }
    fetchParks();
  }

  renderParkModal(park) {
    this.setState({
      park: park,
      show: true,
    })
  }

  closeModal = () => {
    this.setState({
      park: {},
      show: false
    })
  }

  render() {

    // uncomment if the API decideds it wants to work properly
    // let bodyContent;
    // if (this.state.loading) {
    //   bodyContent = <div>Loading...</div>
    // } else {
    //   bodyContent = <ParksContainer parks={this.props.parks} loading={this.props.loading} />
    // }

    return (
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
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
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

        <ParksContainer
          parks={this.props.parks}
          loading={this.props.loading}
          buttonClick={this.renderParkModal.bind(this)}
        />
        {/* uncomment if the API decideds it wants to work properly */}
        {/* {bodyContent} */}
        <Park
          park={this.state.park}
          show={this.state.show}
          closeModal={this.closeModal.bind(this)}
        />
      </div>
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