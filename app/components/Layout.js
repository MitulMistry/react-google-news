import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';

const Layout = () => (
  <Container id="container">
    <Row>
      <Col sm="auto">
        <Sidebar />
      </Col>
      <Col>
        <MainContainer />
      </Col>
    </Row>
  </Container>
);

export default Layout;