import './scss/App.scss';
import bgImg from './images/background_01.jpg';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';

const root = ReactDOM.createRoot(
  document.getElementById('app')
);
root.render(<App />);