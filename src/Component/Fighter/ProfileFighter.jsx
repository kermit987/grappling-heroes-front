import React, { Component } from 'react';

export default class InfoFighter extends React.Component {
  componentDidMount() {
    const { handle } = this.PaymentResponse.match.params;
    console.log('Value of handle ', handle);
  }

  render() {
    return <div>Inside info fighter</div>;
  }
}
