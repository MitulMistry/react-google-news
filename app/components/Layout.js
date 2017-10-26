import React from 'react';
import { Sidebar } from './Sidebar';
import { MainContainer } from './MainContainer';

export class Layout extends React.Component {
  render() {
    return (
      <div>
        <h2>Layout</h2>
        <Sidebar />
        <MainContainer />
      </div>
    );
  }
}
