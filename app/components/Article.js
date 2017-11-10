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

// <Card className="article">
//   <Row>
//     <Col xs="auto">
//       <a href={this.props.url} target="_blank"><img src={this.props.urlToImage} width="130" height="130" className="article-image" /></a>
//     </Col>
//     <Col>
//       <div className="article-text">
//         <h2><a href={this.props.url} target="_blank">{this.props.title}</a></h2>
//         <p>{this.props.description}</p>
//       </div>
//     </Col>
//   </Row>
// </Card>
