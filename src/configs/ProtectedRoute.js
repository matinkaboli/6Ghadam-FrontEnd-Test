import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export default props => {
  if (!localStorage.getItem('token')) {
    return <Redirect to='/denied' />;
  }

  return <Route {...props} />;
};
