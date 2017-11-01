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

    fetch('https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=') //needs API key
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
