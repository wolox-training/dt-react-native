import React from 'react';
import ReactDOM from 'react-dom';
import Game from 'app/components/Game/index';

import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
