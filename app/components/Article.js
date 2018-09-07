import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-lazyload-fadein';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

export class Article extends React.Component {
  render() {
    return (
      <FadeIn height={500}>
        {onload => (
          <Card className="article">
            <a href={this.props.url} target="_blank"><CardImg top width="100%" src={this.props.urlToImage} onLoad={onload} alt="Article image" /></a>
            <CardBody>
              <CardTitle><a href={this.props.url} target="_blank">{this.props.title}</a></CardTitle>
              <CardText>{this.props.description}</CardText>
            </CardBody>
          </Card>
        )}
      </FadeIn>
    );
  }
}

Article.propTypes = {
  url: PropTypes.string,
  urlToImage: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};
