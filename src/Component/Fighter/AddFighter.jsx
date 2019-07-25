import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default class AddFighter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      birth: ''
    };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  submit = async () => {
    const name = this.state.name;
    const birth = this.state.birth;
    const newFighter = { name, birth };
    try {
      await axios.post(
        'https://floating-hamlet-32385.herokuapp.com/addFighter',
        newFighter,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      this.props.updateListFighter();
    } catch (e) {
      console.log('FAILED submit AddFither.jsx ', e);
    }
  };

  render() {
    return (
      <div>
        <form noValidate autoComplete="off">
          <TextField
            name="name"
            id="name-id"
            label="name"
            margin="normal"
            variant="outlined"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <TextField
            name="birth"
            id="birth-id"
            label="birth"
            margin="normal"
            variant="outlined"
            value={this.state.birth}
            onChange={this.handleChange}
          />
          <Button variant="contained" onClick={this.submit}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
