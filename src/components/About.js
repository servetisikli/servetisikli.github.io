import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FcApproval } from "react-icons/fc";

const About = () => {
  return (
    <div>
      <Container>
        <div>
          <Row>
            <Col className="flex justify-center">
              <h3>
                <FcApproval className="text-5xl" />
              </h3>
            </Col>
          </Row>
        </div>

        <div>
          <Row>
            <Col sm={8}>
              <h1 className="text-white">Full Stack Web Development</h1>
              <p>Digital-Software Solutions</p>
              <p className="mb-8 leading-relaxed">
                "The full potential of your business is unlocked with our
                digital software solutions. Innovative and scalable applications
                are delivered by us, specializing in harnessing the power of
                React. Custom software solutions, which streamline processes,
                enhance productivity, and drive business growth, are provided by
                our expert team, combining cutting-edge technology with a
                user-centric approach. The difference is experienced with our
                React-powered solutions."
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
