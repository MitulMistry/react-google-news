import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Article } from './Article';

export class ArticlesContainer extends React.Component {
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
