import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store'
import App from './components/App/index';

const store = configureStore()

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}