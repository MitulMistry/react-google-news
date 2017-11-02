import 'bootstrap/dist/css/bootstrap.css'; //for Webpack
import './css/App.css';
import bgImg from './images/background_01.jpg';

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
