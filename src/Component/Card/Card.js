import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Login from 'Component/Login/Login.js'
import Password from 'Component/Password/Password.js'
import Button from 'Component/Button/Button.js'
import 'css/cardLoginPassword.css';
import 'css/signIn.css'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  return (
    <Card>
      <CardContent className="cardLoginPassword" >
        <h1 className="signIn">Sign In</h1>
        <Login />
        <Password />
        <Button />
      </CardContent>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);