import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

export class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLoaded: false
    };

    this.setImageLoaded = this.setImageLoaded.bind(this);
  }

  setImageLoaded() {
    this.setState({imageLoaded: true});
  }

  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: this.state.imageLoaded ? 1 : 0 }}
        transition={{ duration: 0.75 }}
        className ="article-motion-div"
      >
        <Card className="article">
          <a href={this.props.url} target="_blank">
            <CardImg top width="100%" src={this.props.urlToImage} onLoad={this.setImageLoaded} alt="Article image" />
          </a>
          <CardBody>
            <CardTitle><a href={this.props.url} target="_blank">{this.props.title}</a></CardTitle>
            <CardText>{this.props.description}</CardText>
          </CardBody>
        </Card>
      </motion.div>
    );
  }
}

Article.propTypes = {
  url: PropTypes.string,
  urlToImage: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};
