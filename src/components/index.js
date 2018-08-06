import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Panel from './Panel';
import Login from './Login';
import NotFound from './NotFound';

class Components extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route path='/panel' component={Panel} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Components;
