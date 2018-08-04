import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ManageData from './ManageData';
import ManageWinners from './ManageWinners';
import SystemControl from './SystemControl';
import PredictionControl from './PredictionControl';

export default () =>
  <Switch>
    <Route exact path='/panel/manage-data' component={ManageData} />
    <Route exact path='/panel/system-control' component={SystemControl} />
    <Route
      exact path='/panel/prediction-control' component={PredictionControl} />
    <Route exact path='/panel/manage-winners' component={ManageWinners} />
  </Switch>;