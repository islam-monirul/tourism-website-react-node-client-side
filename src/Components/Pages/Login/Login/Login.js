import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();

  return (
    <section className="loginPage">
      <Container>
        <Row>
          <h1 className="text-center mb-4">Please Login</h1>
          <Col md={6} className="mx-auto formStyle">
            <form>
              <div className="d-grid gap-2 mt-2">
                <Button
                  variant="dark"
                  className="fs-5"
                  onClick={signInUsingGoogle}
                >
                  Continue with google
                </Button>
              </div>
            </form>

            <div className="mt-5 text-center fw-bold">
              Are you a new user ? <NavLink to="/signup">Click here</NavLink>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
