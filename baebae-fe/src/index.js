import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/main/Main';

ReactDOM.render(
  <Router>
    <Switch>
      <Route
        exact
        path={"/"}
        component={Main}
      />
    </Switch>
  </Router>,
  document.getElementById('root')
);