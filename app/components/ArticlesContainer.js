import React from 'react';
import { Article } from './Article';

export class ArticlesContainer extends React.Component {
  render() {
    return (
      <div>
      <h4>ArticlesContainer</h4>
      <Article />
      <Article />
      </div>
    );
  }
}
