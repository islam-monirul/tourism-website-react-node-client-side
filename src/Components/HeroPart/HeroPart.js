import React from "react";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import "./HeroPart.css";

const HeroPart = () => {
  let history = useHistory();

  // book appointment
  const handleLearnMore = () => {
    history.push("/");
  };
  return (
    <section>
      <Carousel variant="light" className="heroSection">
        <Carousel.Item>
          <Container>
            <Row className="d-flex align-items-center justify-content-center">
              <Col>
                <div>
                  <h1 className="fw-bold text-white text-center">
                    Travel Around
                  </h1>
                  <h2 className="text-white text-center">
                    The{" "}
                    <span className="fw-bold custom-text-color1">
                      {" "}
                      Whole World
                    </span>{" "}
                    <span className="fw-bold text-white">with </span>us...
                  </h2>
                  <p className="text-white text-center">
                    Let's break the limit and travel together around the
                    beautiful places
                  </p>
                  <Button
                    variant="outline-light"
                    className="mt-3 d-block mx-auto"
                    onClick={() => handleLearnMore()}
                  >
                    Learn More
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Container>
            <Row className="d-flex align-items-center justify-content-center">
              <Col>
                <div>
                  <h1 className="fw-bold text-white text-center">We Promise</h1>
                  <h2 className="text-white text-center">
                    To
                    <span className="fw-bold text-white"> Provide</span>
                    <span className="fw-bold custom-text-color1">
                      {" "}
                      the best{" "}
                    </span>
                    experience!
                  </h2>
                  <p className="text-white text-center">
                    Let's break the limit and travel together around the
                    beautiful places
                  </p>
                  <Button
                    variant="outline-light"
                    className="mt-3 d-block mx-auto"
                    onClick={() => handleLearnMore()}
                  >
                    Learn More
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default HeroPart;
