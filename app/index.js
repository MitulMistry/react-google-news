import 'bootstrap/dist/css/bootstrap.css'; //for Webpack
import './css/App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
