import React from "react";

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

function Contact(props) {
  return (
    <div className="contact">
      <Container>
        <div>
        <Row>
        <Col xs="6">Contact Details</Col>
        <Col xs="6">Address</Col>
      </Row>
        </div>
      </Container>
    </div>
  );
}

export default Contact;