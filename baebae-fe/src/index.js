
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import history from './history';
import Routes from './Routes';
// redux
import { Provider } from 'react-redux';
import configureStore from 'store';
// components
import Header from './common/layout/Header';
import Layout from './common/layout/Layout';
import Menu from './common/layout/Menu';
// css
import './index.css';

const { store } = configureStore;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Header />
      <Layout>
        <Routes />
        <Menu />
      </Layout>
    </Router>
  </Provider>,
  document.getElementById('root')
);