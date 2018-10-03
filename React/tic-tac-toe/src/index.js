import React from 'react';
import ReactDOM from 'react-dom';

import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';

import Game from 'app/components/Game/index';
import App from '~components/App'; // eslint-disable-line import/first

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
