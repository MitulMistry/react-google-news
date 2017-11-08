import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './Layout';

export class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout />
      </Router>
    );
  }
};
