import React from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch'; // Use fetch for API calls
import Masonry from 'react-masonry-css'
import { Row } from 'reactstrap';
import { Article } from './Article';

export class ArticlesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      articles: []
    };
  }

  componentDidMount() {
    // Get the incoming route
    const route = this.props.pathName;

    // Get articles for first time being mounted
    const apiRoute = this.getApiRoute(route);
    this.getArticles(apiRoute);
  }

  componentDidUpdate(prevProps) {
    // Get the incoming route
    const route = this.props.pathName;

    // Compare incoming route to previous route.
    // Only make API call if new route is different.
    if (route !== prevProps.pathName) {
      const apiRoute = this.getApiRoute(route);
      this.getArticles(apiRoute);
    }
  }

  // Helper method to format correct backened query for API
  getApiRoute(route) {
    // Default route should make API call to api/top, otherwise use route name
    // for API route (e.g. "espn" becomes ""/api/espn")
    const apiRoute = (route === '/') ? '/api/top' : '/api/' + route;
    return apiRoute;
  }

  getArticles(route) {
    // Necessary to set loading state for method reuse
    this.setState({ loading: true });

    // Requests API from back end (server.js)
    fetch(route)
      .then(response => {
        return response.json();
      }).then(json => {
        const articles = json.articles; // Array of article objects/hashes
        this.setState({ articles: articles, loading: false });
        // console.log('parsed json', articles);
      }).catch(ex => {
        console.log('parsing failed', ex);
      });
  }

  render() {
    if (this.state.loading) return (
      <p>Loading...</p>
    );

    // Configure breakpoints for Masonry grid of columns
    const breakpointColumnsObj = {
      default: 3,
      992: 2,
      576: 1
    };

    return (
      <Row>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="article-masonry-grid"
          columnClassName="article-masonry-grid_column"
        >
          {this.state.articles.map((article, i) =>
            <Article
              key={`article-${i}`}
              url={article.url}
              urlToImage={article.urlToImage}
              title={article.title}
              description={article.description}
            />
          )}
        </Masonry>
      </Row>
    );
  }
}

ArticlesContainer.propTypes = {
  pathName: PropTypes.string.isRequired
};
