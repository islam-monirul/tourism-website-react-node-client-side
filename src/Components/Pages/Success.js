import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Success.css";

const Success = () => {
  return (
    <section className="py-5">
      <Container className="successPage d-flex justify-content-center align-items-center">
        <Row>
          <h1 className="text-success text-center">Success!!</h1>
          <p className="text-secondary text-center">
            Congratulations !! Your Operation has been Successful.
          </p>

          <Button variant="dark" as={Link} to="/home">
            Back to Homepage
          </Button>
        </Row>
      </Container>
    </section>
  );
};

export default Success;
