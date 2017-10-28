import React from 'react';
import 'whatwg-fetch'; //use fetch for API call
import { Container, Row, Col } from 'reactstrap';
import { Article } from './Article';

export class ArticlesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    fetch('https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=') //needs API key
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        const posts = json.articles; //array of article objects/hashes
        this.setState({ articles });
        console.log('parsed json', posts);
      }).catch(function(ex) {
        console.log('parsing failed', ex);
      });
  }

  render() {
    return (
      <div>
        <Row>
        <Col>
          <Article />
        </Col>
        <Col>
          <Article />
        </Col>
        </Row>
        <Row>
        <Col>
          <Article />
        </Col>
        <Col>
          <Article />
        </Col>
        </Row>
      </div>
    );
  }
}
