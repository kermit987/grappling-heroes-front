import React, { Component } from 'react';
import axios from 'axios';

export default class Private extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fighter: ''
    };
  }

  fetchFighter = async () => {
    try {
      const result = await axios.get('http://localhost:3001/fighterInfo');
      this.setState({ fighter: result });
    } catch (e) {
      console.log('Failed Private.jsx fetchFighter ', e);
    }
  };

  componentDidMount() {
    this.fetchFighter();
  }

  render() {
    return (
      <div>
        <h1>Private access</h1>
        {this.state.fighter}
      </div>
    );
  }
}
