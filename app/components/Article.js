import React from 'react';
import { Container, Row, Col, Card } from 'reactstrap';

export class Article extends React.Component {
  render() {
    return ( //http://via.placeholder.com/120x120
      <Card className="article">
        <Row>
          <Col xs="auto">
            <img src={this.props.urlToImage} width="120" height="120" />
          </Col>
          <Col>
            <div className="article-text">
              <h2>{this.props.title}</h2>
              <p>{this.props.description}</p>
            </div>
          </Col>
        </Row>
      </Card>
    );
  }
}
