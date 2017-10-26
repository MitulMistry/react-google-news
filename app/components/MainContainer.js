import React from 'react';
import { ArticlesContainer } from './ArticlesContainer';
import { Footer } from './Footer';

export class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <h3>MainContainer</h3>
        <ArticlesContainer />
        <Footer />
      </div>
    );
  }
}
