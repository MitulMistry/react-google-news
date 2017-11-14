import React from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

export class Article extends React.Component {
  render() {
    return (
      <Card className="article">
        <a href={this.props.url} target="_blank"><CardImg top width="100%" src={this.props.urlToImage} alt="Article image" /></a>
        <CardBody>
          <CardTitle><a href={this.props.url} target="_blank">{this.props.title}</a></CardTitle>
          <CardText>{this.props.description}</CardText>
        </CardBody>
      </Card>
    );
  }
}
