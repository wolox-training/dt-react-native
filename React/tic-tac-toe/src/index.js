import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Game from 'app/components/Game/index';

import './scss/index.scss';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';

const MiApp = () => (
  <Provider store={store}>
    <Game />
  </Provider>
);

ReactDOM.render(<MiApp />, document.getElementById('root'));
registerServiceWorker();
