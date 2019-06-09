import React from 'react';
import Card from './Component/Card/Card.jsx';
import Private from './Component/Private.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/login' component={Card} />
            {/* <PrivateRoute exact path='/private' component={Private} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
