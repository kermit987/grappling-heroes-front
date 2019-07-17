import React from 'react';
import Card from './Component/Card/Card.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Private from 'Component/Private';
// import Container from '@material-ui/core/Container';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Container maxWidth="sm" /> */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Card} />
            <Route exact path="/Private" component={Private} />
            {/* <PrivateRoute exact path='/private' component={Private} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
