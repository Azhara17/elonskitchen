import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Features = (props) => {
  return (
    <div className="features-section">
      <Container >
        <Row xs="3">
            <Col className="features-col">
            <span style={{color: "#69A88D"}}>
            <i class="fas fa-seedling fa-3x"></i>
            </span>
            
                <h3>dfekfdeff</h3>
                <p>ddfsddfdfefree fvvg</p>
            </Col>
            <Col className="features-col">
            <span style={{color: "#69A88D"}}>
            <i class="fas fa-birthday-cake fa-3x"></i>
            </span>
            
                <h3>dfekfdeff</h3>
                <p>ddfsddfdfefree fvvg</p>
            </Col>
            <Col className="features-col">
            <span style={{color: "#69A88D"}}>
            <i class="fas fa-clock fa-3x"></i>
            </span>

                <h3>dfekfdeff</h3>
                <p>ddfsddfdfefree fvvg</p>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;