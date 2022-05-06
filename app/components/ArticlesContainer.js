import React from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch'; //use fetch for API call
import Masonry from 'react-masonry-css'
import { Container, Row, Col } from 'reactstrap';
import { Article } from './Article';
import { useLocation } from 'react-router-dom';

export class ArticlesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      pathName: '',
      articles: []
    };
  }

  componentDidMount() {
    var route = this.props.pathName; //get the incoming route

    this.setState({ pathName: route });
    var apiRoute = this.getApiRoute(route);
    this.getArticles(apiRoute); //get articles for first time being mounted
  }

  componentWillReceiveProps(nextProps) {
    var route = nextProps.pathName; //get the incoming route

    if (route !== this.state.pathName) { //compare incoming route to previous route
      var apiRoute = this.getApiRoute(route);
      this.getArticles(apiRoute);
    }
  }

  getApiRoute(route) {
    var apiRoute = (route === '/') ? '/api/top' : '/api/' + route; //default route should make API call to api/top, otherwise use route name for API route (e.g. "espn" becomes ""/api/espn")
    return apiRoute;
  }

  getArticles(route) {
    this.setState({ loading: true }); //necessary for method reuse

    fetch(route) //requests API from back end (server.js)
      .then(response => {
        return response.json();
      }).then(json => {
        const articles = json.articles; //array of article objects/hashes
        this.setState({ articles: articles, loading: false });
        console.log('parsed json', this.state.articles);
      }).catch(ex => {
        console.log('parsing failed', ex);
      });
  }

  render() {
    if (this.state.loading) return (
      <p>Loading...</p>
    );

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
            key={i}
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
