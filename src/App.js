import React from 'react';
import Card from './Component/Card/Card.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from 'Component/LandingPage';
import ListFighter from 'Component/Fighter/ListFighter';
import ProfileFighter from 'Component/Fighter/ProfileFighter';
import Diet from 'Component/Diet/Diet';
import Profile from 'Component/Profile/Profile';
// import Container from '@material-ui/core/Container';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Container maxWidth="sm" /> */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Card} />
            <Route exact path="/ProfileFighter" component={ProfileFighter} />
            <Route exact path="/LandingPage" component={LandingPage} />
            <Route exact path="/ListFighter" component={ListFighter} />
            <Route exact path="/Diet" component={Diet} />
            <Route exact path="/Profile" component={Profile} />
            {/* <PrivateRoute exact path='/private' component={Private} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
