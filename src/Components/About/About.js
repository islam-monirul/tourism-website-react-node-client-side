import React from "react";
import aboutPhoto from "../../images/about.png";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div>
      <section className="aboutSection">
        <Container>
          <Row className="d-flex align-items-center">
            <Col md={6}>
              <Image src={aboutPhoto} fluid className="w-75" />
            </Col>
            <Col md={6}>
              <h1 className=" fw-bold mb-4">About Us</h1>
              <p>
                <strong className="custom-text-color1">
                  Mo-TourPhobia | Tour Planner
                </strong>{" "}
                is an imaginary tour planner website. This is built with
                React.js, Firebase, React-bootstrap, React router, Node.js,
                MongoDB, Express js etc. as an assignment of Complete Web
                Development with Jhankar Mahbub by Monirul Islam.
                <br /> <br />
                In this website, You can get different types of tour packages.
                You can get the best possible customer support here. If you want
                to travel the world contact us soon !
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
