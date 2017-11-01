import React from 'react';
import { Container, Row, Col, Card } from 'reactstrap';

export class Article extends React.Component {
  render() {
    return (
      <Card className="article">
        <Row>
          <Col xs="auto">
            <a href={this.props.url} target="_blank"><img src={this.props.urlToImage} width="130" height="130" className="article-image" /></a>
          </Col>
          <Col>
            <div className="article-text">
              <h2><a href={this.props.url} target="_blank">{this.props.title}</a></h2>
              <p>{this.props.description}</p>
            </div>
          </Col>
        </Row>
      </Card>
    );
  }
}
