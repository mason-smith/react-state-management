import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Local Dependencies
import ReduxManagement from '../features/ReduxManagement';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ReduxManagement />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
