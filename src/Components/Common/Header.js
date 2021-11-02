import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Common.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar
      variant="dark"
      sticky="top"
      expand="lg"
      className="custom-bg-color align-middle py-3"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-middle fs-4">
          MT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            {user?.email && (
              <Nav>
                <Nav.Link as={Link} to="/myorders">
                  My Bookings
                </Nav.Link>
                <Nav.Link as={Link} to="/manageallorders">
                  Manage All Bookings
                </Nav.Link>
                <Nav.Link as={Link} to="/addnewtourpack">
                  Add New Tour
                </Nav.Link>
              </Nav>
            )}
          </Nav>
          <Navbar.Text>
            <a
              className="text-decoration-none text-dark mx-md-3 me-3"
              as={Link}
              to="/"
            >
              {user?.displayName ? `Hi, ${user.displayName}` : ""}
            </a>
          </Navbar.Text>

          {user?.email ? (
            <Button
              variant="light"
              className="custom-text-color1"
              onClick={logOut}
            >
              Logout
            </Button>
          ) : (
            <Nav.Link
              as={Link}
              className="custom-text-color1 p-0 loginBtn"
              to="/login"
            >
              Login
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
