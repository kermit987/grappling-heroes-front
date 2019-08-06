import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'

class Profile extends Component {
  state = {
    name: '',
    lastname: '',
    birth: '',
    weight: '',
    belt: '',
    stripe: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleClick = async () => {
    try {
      const update = this.state
      console.log('inside the handleClick')
      axios.post(
        'https://floating-hamlet-32385.herokuapp.com/profile',
        // 'http://localhost:3002/profile',
        update,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    } catch (e) {
      console.log('Error Profile component handleClick post axios ', e)
    }
  }

  async componentDidMount() {
    try {
      const result = await axios.get(
        'https://floating-hamlet-32385.herokuapp.com/profile'
        // 'http://localhost:3002/profile'
      )

      for (let key in result.data) this.setState({ [key]: result.data[key] })
      this.props.updateName('EPITECH')
    } catch (e) {
      console.log('Error Profile component ', e)
    }
  }

  render() {
    return (
      <div>
        <TextField
          name='name'
          id='outlined-name'
          label='Name'
          value={this.state.name}
          onChange={e => this.handleChange(e)}
          margin='normal'
          variant='outlined'
        />
        <br />
        <TextField
          name='lastname'
          id='outlined-name'
          label='Lastname'
          value={this.state.lastname}
          onChange={e => this.handleChange(e)}
          margin='normal'
          variant='outlined'
        />
        <br />
        <TextField
          name='birth'
          id='outlined-name'
          label='Birth'
          value={this.state.birth}
          onChange={e => this.handleChange(e)}
          margin='normal'
          variant='outlined'
        />
        <br />
        <TextField
          name='weight'
          id='outlined-name'
          label='Weight'
          value={this.state.weight}
          onChange={e => this.handleChange(e)}
          margin='normal'
          variant='outlined'
        />
        <br />
        <TextField
          name='belt'
          id='outlined-name'
          label='Belt'
          value={this.state.belt}
          onChange={e => this.handleChange(e)}
          margin='normal'
          variant='outlined'
        />
        <br />
        <TextField
          name='stripe'
          id='outlined-name'
          label='Stripe'
          value={this.state.stripe}
          onChange={e => this.handleChange(e)}
          margin='normal'
          variant='outlined'
        />
        <Button variant='contained' color='primary' onClick={this.handleClick}>
          Save
        </Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    lastname: state.lastname
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateName: newName => dispatch({ type: 'UPDATE_NAME', payload: newName })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
