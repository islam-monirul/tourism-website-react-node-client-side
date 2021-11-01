import React from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import "./Common.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row style={{ paddingBottom: "25px" }}>
          <Col md={6}>
            <h5 className="custom-text-color1">Mo-TourPhobia | Tour Planner</h5>
            <p>
              <strong>Mo-TourPhobia | Tour Planner</strong> is an imaginary tour
              planner website. This is built with React.js, Firebase,
              React-bootstrap, React router, Node.js, MongoDB etc. as an
              assignment of Complete Web Development with Jhankar Mahbub by
              Monirul Islam.
            </p>
          </Col>
          <Col md={6} className="subscribeBtn">
            <InputGroup>
              <FormControl
                placeholder="Enter Your Email Address"
                aria-label="email-address"
                aria-describedby="basic-addon2"
              />
              <Button variant="danger" id="basic-addon2">
                Subscribe
              </Button>
            </InputGroup>
          </Col>
        </Row>

        <Row className="copyright">
          <p>
            Copyright © 2021 |{" "}
            <span style={{ color: "#e01250" }}>Monirul Islam</span>
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
