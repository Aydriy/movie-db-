import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.sass';
import Routes from './app/routes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));


serviceWorker.unregister();
