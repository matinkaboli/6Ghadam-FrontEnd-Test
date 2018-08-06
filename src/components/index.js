import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Panel from './Panel';
import Login from './Login';
import Denied from './Denied';
import NotFound from './NotFound';
import ProtectedRoute from 'Root/configs/ProtectedRoute';

class Components extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/denied' component={Denied} />
        <ProtectedRoute path='/panel' component={Panel} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Components;
