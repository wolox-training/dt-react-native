import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Book from '../src/app/components/Book';

import './scss/index.scss';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';

require('dotenv').config();

const MiApp = () => (
  <Provider store={store}>
    <Book />
  </Provider>
);

ReactDOM.render(<MiApp />, document.getElementById('root'));
registerServiceWorker();
