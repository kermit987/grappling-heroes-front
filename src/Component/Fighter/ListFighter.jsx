import React, { Component } from 'react';
import axios from 'axios';
import AddFighter from 'Component/Fighter/AddFighter';

export default class ListFighter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fighter: ['tmp'],
      refresh: false
    };
  }

  fetchFighter = async () => {
    try {
      const result = await axios.get(
        'https://floating-hamlet-32385.herokuapp.com/fighterInfo'
      );
      this.setState({ fighter: result.data });
      console.log('before the map');
      this.state.fighter.map(key => {
        console.log('value of key ', key);
      });
      console.log('after the map');
    } catch (e) {
      console.log('Failed Private.jsx fetchFighter ', e);
    }
  };

  updateListFighter = () => {
    this.fetchFighter();
  };

  componentDidMount() {
    this.fetchFighter();
  }

  render() {
    const fighters = this.state.fighter.map(fighter => (
      <li key="1">
        {fighter.name} {fighter.birth}
      </li>
    ));

    return (
      <div>
        <ul>{fighters}</ul>
        <AddFighter updateListFighter={this.fetchFighter} />
      </div>
    );
  }
}
