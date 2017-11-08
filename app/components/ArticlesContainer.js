import React from 'react';
import 'whatwg-fetch'; //use fetch for API call
import { Container, Row, Col } from 'reactstrap';
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
    this.setState({ loading: true }); //necessary for method reuse?

    fetch('/api/top') //requests API from back end (server.js)
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

  componentWillReceiveProps(nextProps) {
    var route = nextProps.location.pathname; //get the incoming route

    if (route !== this.props.location.pathname) { //compare incoming route to previous route
      this.setState({ loading: true }); //necessary for method reuse?
      console.log(route);

      var apiRoute;

      if (route === '/') {
        apiRoute = '/top'; //default route should make API call to /top
      } else {
        apiRoute = '/api' + route;
      }

      fetch(apiRoute) //requests API from back end (server.js)
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
  }

  render() {
    if (this.state.loading) return (
      <p>Loading...</p>
    );

    return (
      <div>
        {this.state.articles.map(article =>
          <Article
            url={article.url}
            urlToImage={article.urlToImage}
            title={article.title}
            description={article.description}
          />
        )}
      </div>
    );
  }
}
