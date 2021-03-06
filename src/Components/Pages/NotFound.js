import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="py-5">
      <Container className="notFoundPage d-flex justify-content-center align-items-center">
        <Row>
          <h1 className="text-danger text-center">404</h1>
          <p className="text-secondary text-center">
            Page Not Found!! The page you are looking for is not available.
          </p>

          <Button variant="dark" as={Link} to="/home">
            Back to Homepage
          </Button>
        </Row>
      </Container>
    </section>
  );
};

export default NotFound;
