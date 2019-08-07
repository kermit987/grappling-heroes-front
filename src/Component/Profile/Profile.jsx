import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { FormActions } from 'Component/Action';

class Profile extends Component {
  handleChange = (key, event) => {
    this.props[`update${key}`](event.target.value);
  };

  handleClick = async () => {
    try {
      const { name, weight, birth, lastname } = this.props;
      axios.post(
        'https://floating-hamlet-32385.herokuapp.com/profile',
        { name, weight, birth, lastname },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    } catch (e) {
      console.log('Error Profile component handleClick post axios ', e);
    }
  };

  async componentDidMount() {
    try {
      const result = await axios.get(
        'https://floating-hamlet-32385.herokuapp.com/profile'
      );
      const payload = result.data;
      this.props.updateName(payload['name']);
      this.props.updateLastname(payload['lastname']);
      this.props.updateBirth(payload['birth']);
      this.props.updateWeight(payload['weight']);
      this.props.updateBelt(payload['belt']);
      this.props.updateStripe(payload['stripe']);
    } catch (e) {
      console.log('Error Profile component ', e);
    }
  }

  render() {
    return (
      <div>
        <TextField
          name="name"
          id="outlined-name"
          label="Name"
          value={this.props.name}
          onChange={e => this.handleChange('Name', e)}
          margin="normal"
          variant="outlined"
        />
        <br />
        <TextField
          name="lastname"
          id="outlined-name"
          label="Lastname"
          value={this.props.lastname}
          onChange={e => this.handleChange('Lastname', e)}
          margin="normal"
          variant="outlined"
        />
        <br />
        <TextField
          name="birth"
          id="outlined-name"
          label="Birth"
          value={this.props.birth}
          onChange={e => this.handleChange('Birth', e)}
          margin="normal"
          variant="outlined"
        />
        <br />
        <TextField
          name="weight"
          id="outlined-name"
          label="Weight"
          value={this.props.weight}
          onChange={e => this.handleChange('Weight', e)}
          margin="normal"
          variant="outlined"
        />
        <br />
        <TextField
          name="belt"
          id="outlined-name"
          label="Belt"
          value={this.props.belt}
          onChange={e => this.handleChange(e)}
          margin="normal"
          variant="outlined"
        />
        <br />
        <TextField
          name="stripe"
          id="outlined-name"
          label="Stripe"
          value={this.props.stripe}
          onChange={e => this.handleChange(e)}
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          Save
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    lastname: state.lastname,
    birth: state.birth,
    weight: state.weight,
    belt: state.belt,
    stripe: state.stripe
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateName: name =>
      dispatch({ type: FormActions.UPDATE_NAME, payload: name }),
    updateLastname: lastname =>
      dispatch({ type: FormActions.UPDATE_LASTNAME, payload: lastname }),
    updateBirth: birth =>
      dispatch({ type: FormActions.UPDATE_BIRTH, payload: birth }),
    updateWeight: weight =>
      dispatch({ type: FormActions.UPDATE_WEIGHT, payload: weight }),
    updateBelt: belt =>
      dispatch({ type: FormActions.UPDATE_BELT, payload: belt }),
    updateStripe: stripe =>
      dispatch({ type: FormActions.UPDATE_STRIPE, payload: stripe })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
