import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container fluid={true} className="responsive-container" style={{ marginTop: 10 }}>
      <Row>
        <Col>
          <h2>
            <i className="fas fa-map-signs text-warning" /> 404 Not Found
          </h2>
          <hr />
          <p>
            It looks like you're lost. Let's go <Link to="/">home</Link>.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

NotFound.propTypes = {};

export default NotFound;
