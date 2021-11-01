import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PlaceOrder = () => {
  const { user } = useAuth();
  const { tourId } = useParams();
  //   console.log(tourId);

  const [pack, setPack] = useState({});

  useEffect(() => {
    fetch(`https://scary-coffin-51525.herokuapp.com/tours/${tourId}`)
      .then((res) => res.json())
      .then((data) => setPack(data));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.phone) {
      //  alert("Are you sure you want to place the order?");

      const { username, email, phone } = data;
      const { name, _id, cost } = pack;

      const newOrder = {
        name: username,
        email: email,
        phone: phone,
        selectedPack: name,
        packId: _id,
        cost: cost,
        status: 0,
      };

      //  console.log(newOrder);

      fetch("https://scary-coffin-51525.herokuapp.com/tours/placeorders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newOrder),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            alert("Added orders");
          }
        });
    }
  };

  return (
    <section className="py-5">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="p-md-5 border">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={user?.displayName}
                      {...register("username")}
                      readOnly
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      defaultValue={user?.email}
                      {...register("email")}
                      readOnly
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  {...register("phone", { required: true })}
                  placeholder="Enter Phone Number"
                />
                {errors.phone && <span>This field is required</span>}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Selected Pack</Form.Label>
                <Form.Control type="text" defaultValue={pack?.name} readOnly />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Tour Starts</Form.Label>
                    <Form.Control type="text" value={pack.startDate} disabled />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Tour Ends</Form.Label>
                    <Form.Control type="text" value={pack.endDate} disabled />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Total Cost</Form.Label>
                <Form.Control type="text" defaultValue={pack.cost} readOnly />
              </Form.Group>

              <Button type="submit" variant="dark">
                Place Order
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PlaceOrder;
