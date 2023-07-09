import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FcApproval } from "react-icons/fc";
import webdevelopers from "../assets/images/webdevelopers.svg";

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
              <h1 className="text-white">React Development</h1>
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
              <div>
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                >
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                >
                  See My Past Work
                </a>
              </div>
            </Col>
            <Col sm={4}>
              <div className="text-xs text-right">
                <img src={webdevelopers} alt="webdevelopers" />
                <a
                  className="text-decoration-none text-inherit"
                  href="https://www.freepik.com/free-vector/hand-drawn-web-developers_12063795.htm#query=web%20developer&position=7&from_view=keyword&track=ais"
                >
                  Image by Freepik
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
