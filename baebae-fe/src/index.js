
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/main/Main';
import Location from './pages/location/Location';
import Mypage from './pages/user/Mypage';
import KakaoSignUp from './pages/user/KakaoSignUp';
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
        <Route
          exact
          path={"/search/location"}
          component={SearchLocation}
        />
        <Route
          exact
          path={"/user/mypage"}
          component={Mypage}
        />
        <Route
          exact
          path={"/user/login"}
          component={KakaoSignUp}
        />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);