import React from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  return (
    <section>
      <Container>
        <Row>
          <h1>My Orders</h1>
        </Row>
      </Container>
    </section>
  );
};

export default MyOrders;
