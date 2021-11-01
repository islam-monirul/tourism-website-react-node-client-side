import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar bg="light" expand="lg" className="border-bottom align-middle">
      <Container>
        <Navbar.Brand href="#" className="fw-bold">
          MTP
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
                  My Orders
                </Nav.Link>
                <Nav.Link as={Link} to="/manageallorders">
                  Manage All Orders
                </Nav.Link>
                <Nav.Link as={Link} to="/addnewtourpack">
                  Add New Tour
                </Nav.Link>
              </Nav>
            )}
          </Nav>
          {user?.email ? (
            <Button variant="light" onClick={logOut}>
              Logout
            </Button>
          ) : (
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          )}
          <Navbar.Text>
            <a href="#login">
              {user?.displayName ? `Signed in as: ${user.displayName}` : ""}
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
