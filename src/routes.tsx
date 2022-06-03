import React from "react";
import { Route, Switch } from 'wouter';

import HomePage from './pages/HomePage';
import StatusPage from './pages/StatusPage';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/status" component={StatusPage} />
    </Switch>
  );
}