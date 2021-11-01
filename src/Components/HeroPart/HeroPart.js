import React from "react";
import { Button, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import hero from "../../images/carousel-image-1.png";
import hero2 from "../../images/carousel-image-2.png";
import "./HeroPart.css";

const HeroPart = () => {
  let history = useHistory();

  // book appointment
  const handleLearnMore = () => {
    history.push("/");
  };
  return (
    <section className="heroSection">
      <Carousel variant="dark">
        <Carousel.Item>
          <Container>
            <Row className="d-flex align-items-center">
              <Col md={7} className="d-flex justify-content-center">
                <Image src={hero} fluid />
              </Col>
              <Col md={5}>
                <div>
                  <h1 className="fw-bold">Travel</h1>
                  <h2>
                    the <span className="text-danger"> Whole World</span>
                  </h2>
                  <h1 className="fw-bold">
                    with <span className="fw-normal">us</span>
                  </h1>
                  <p>Let's break the limit and tour together</p>
                  <Button
                    variant="dark"
                    className="mt-3"
                    onClick={() => handleLearnMore()}
                  >
                    Book Appointment
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Container>
            <Row className="d-flex align-items-center">
              <Col md={7} className="d-flex justify-content-center">
                <Image src={hero2} fluid />
              </Col>
              <Col md={5}>
                <div>
                  <h1 className="fw-bold">We</h1>
                  <h2>
                    Promise <span className="text-danger"> to provide</span>
                  </h2>
                  <h1 className="fw-bold">
                    the best <span className="fw-normal">experience!</span>
                  </h1>
                  <p>Let's break the limit and tour together</p>
                  <Button
                    variant="dark"
                    className="mt-3"
                    onClick={() => handleLearnMore()}
                  >
                    Book Appointment
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
