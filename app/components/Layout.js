import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Sidebar } from './Sidebar';
import { MainContainer } from './MainContainer';

export class Layout extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="3">
            <Sidebar />
          </Col>
          <Col sm="9">
            <MainContainer />
          </Col>
        </Row>
      </Container>
    );
  }
}
