import React from 'react';
import ReactDOM from 'react-dom';

import './scss/index.scss';

import registerServiceWorker from './registerServiceWorker';

require('dotenv').config();

const MiApp = () => (
  <React.Fragment>
    <p>Nada</p>
  </React.Fragment>
);

ReactDOM.render(<MiApp />, document.getElementById('root'));
registerServiceWorker();
