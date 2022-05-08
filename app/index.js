import './scss/App.scss';
// Load background image so Webpack can import and use in SCSS file
import bgImg from './images/background_01.jpg';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<App />);