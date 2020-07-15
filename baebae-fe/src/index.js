
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/main/Main';
import Test from './pages/test';
import Location from './pages/location/Location';
import Join from './pages/user/Join';
import Mypage from './pages/user/Mypage';
import SearchLocation from './pages/location/SearchLocation';
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
      <Switch>
        <Route
          exact
          path={"/search/location"}
          component={SearchLocation}
        />
      </Switch>
      <Switch>
        <Route
          exact
          path={"/user/mypage"}
          component={Mypage}
        />
      </Switch>
      <Switch>
        <Route
          exact
          path={"/user/join"}
          component={Join}
        />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);