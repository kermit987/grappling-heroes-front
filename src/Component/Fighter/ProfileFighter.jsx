import React, { Component } from 'react';

export default class InfoFighter extends React.Component {
  state = {
    name: '',
    birth: '',
    bio: ''
  };
  componentDidMount() {
    const { name, birth, bio } = this.props.location.state;
    this.setState({ name });
    this.setState({ birth });
    this.setState({ bio });
    console.log('birth ', birth);
    // const { handle } = this.PaymentResponse.match.params;
    // console.log('Value of handle ', handle);
  }

  render() {
    return (
      <div>
        {this.state.name}
        <br />
        {this.state.birth}
        <br />
        {this.state.bio}
      </div>
    );
  }
}
