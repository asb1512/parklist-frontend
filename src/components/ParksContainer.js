import React, { Component } from 'react';
import ParksList from './ParksList';

class ParksContainer extends Component {

  render() {
    return (
      <div>
        <ParksList parks={this.props.parks} loading={this.props.loading} />
      </div>
    )
  }
}

export default ParksContainer;