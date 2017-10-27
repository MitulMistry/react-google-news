import React from 'react';
import { ArticlesContainer } from './ArticlesContainer';
import { Footer } from './Footer';

export class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <ArticlesContainer />
        <Footer />
      </div>
    );
  }
}
