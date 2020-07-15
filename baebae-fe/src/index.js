import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/main/Main';
import Test from './pages/test';
import { Provider } from 'react-redux';
import configureStore from 'store';

const { store } = configureStore;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route
          exact
          path={"/"}
          component={Main}
        />
        <Route path={"/test"} component={Test} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);