import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import { isAuthenticated } from './services/auth';
import PageNotFound from './pages/PageNotFound';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}
