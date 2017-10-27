import React from 'react';
import { Container, Row, Col, Card } from 'reactstrap';

export class Article extends React.Component {
  render() {
    return (
      <Card className="article">

        <Row>
          <Col xs="auto">
            <img src="http://via.placeholder.com/120x120" />
          </Col>
          <Col>
            <div className="article-text">
              <h2>Article Title</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ante eros, sollicitudin at eros ut, varius eleifend arcu. Morbi tempor quam nec vestibulum accumsan. Proin finibus at justo a egestas.</p>
            </div>
          </Col>
        </Row>
      </Card>
    );
  }
}
