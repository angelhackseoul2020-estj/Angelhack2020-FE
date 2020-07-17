
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './common/layout/Header';
import Layout from './common/layout/Layout';
import Menu from './common/layout/Menu';
import Routes from './Routes';
import { Provider } from 'react-redux';
import configureStore from 'store';
import './index.css';

const { store } = configureStore;

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <Layout>
      <Routes />
    </Layout>
    <Menu />
  </Provider>,
  document.getElementById('root')
);