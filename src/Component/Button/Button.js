import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class OutlinedButtons extends React.Component {
  onSubmit = () => {
    alert('In the onSubmit function')
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <Button variant="outlined" color="primary" className={classes.button} onClick={this.onSubmit}>
          Connexion
          </Button>
      </div>
    );

  }
}

OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);