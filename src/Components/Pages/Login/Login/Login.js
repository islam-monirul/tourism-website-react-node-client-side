import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();

  return (
    <section>
      <Container className="loginPage d-flex justify-content-center align-items-center">
        <Row>
          <h1 className="text-center mb-4 custom-text-color1">Please Login</h1>
          <Col md={10} className="mx-auto formStyle">
            <form>
              <div className="d-grid gap-2 mt-2">
                <Button
                  variant="outline-dark"
                  className="fs-5"
                  onClick={signInUsingGoogle}
                >
                  <FcGoogle /> &nbsp; Continue with google
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
