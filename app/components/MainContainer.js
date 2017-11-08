import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ArticlesContainer } from './ArticlesContainer';
import { Footer } from './Footer';

export class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' component={ArticlesContainer} />
          <Route path='/arstechnica' component={ArticlesContainer} />
          <Route path='/associatedpress' component={ArticlesContainer} />
          <Route path='/cnn' component={ArticlesContainer} />
          <Route path='/espn' component={ArticlesContainer} />
          <Route path='/fortune' component={ArticlesContainer} />
          <Route path='/reuters' component={ArticlesContainer} />
          <Route path='/techcrunch' component={ArticlesContainer} />
          <Route path='/wallstreetjournal' component={ArticlesContainer} />
          <Route path='/time' component={ArticlesContainer} />
          <Route path='/usatoday' component={ArticlesContainer} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
