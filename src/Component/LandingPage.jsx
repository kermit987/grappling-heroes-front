import React from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome Steven</h2>
        <Link to="/ListFighter">ListFighter</Link>
        <br />
        <Link to="/Diet">Diet</Link>
        <br />
        <Link to="/Profile">Profile</Link>
      </div>
    );
  }
}
