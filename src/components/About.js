import React from 'react';
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import ScrollAnimation from 'react-animate-on-scroll';
import Saltanat from "../assets/img/salta-profile1.jpg"

const About = () => {
  return(
    
    <div className="section section-about">
    <Container>
      <div className="section-story-overview">
      <ScrollAnimation animateIn='fadeIn' duration="3s">
      <Row>
          <Col md="6">
            <div
              className="image-container">
              <img className="saltanat-img" src={Saltanat} loading="lazy" alt="saltanat-img"/>
            </div>
          </Col>
          <Col className="about-text">
            <h3 className="about-header">
              ABOUT ME
            </h3>
            <p>
              The Arctic Ocean freezes every winter and much of the
              sea-ice then thaws every summer, and that process will
              continue whatever happens with climate change. Even if the
              Arctic continues to be one of the fastest-warming regions of
              the world, it will always be plunged into bitterly cold
              polar dark every winter. And year-by-year, for all kinds of
              natural reasons, there’s huge variety of the state of the
              ice.
            </p>
          </Col>
        </Row>
</ScrollAnimation>
        
      </div>
    </Container>
  </div>

  );
  /*return (
    <Media>
      <Media left href="#">
        <Media className="saltanat-pic" object src={Saltanat} alt="Saltanat-pic" />
      </Media>
      <Media body>
        <Media heading>
          Media heading
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
  );*/
};

export default About;