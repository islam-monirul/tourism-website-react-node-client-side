import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const AddNewTourPack = () => {
  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.name) {
      // setting default category and img
      data.category = "travel";
      data.img = "https://i.ibb.co/zQMjQPT/noImg.jpg";

      fetch("https://scary-coffin-51525.herokuapp.com/tours/addnew", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            history.push("/success");
          }
        });
    }
  };

  return (
    <section className="py-5">
      <Container>
        <h1 className="text-center fw-bold mb-5 custom-text-color1">
          Add New Tour Package
        </h1>
        <Row>
          <Col className="p-md-5 border">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Package Name</Form.Label>
                    <Form.Control
                      type="text"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <span className="mt-2 custom-text-color1">
                        This field is required
                      </span>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Duration (in days)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="e.g. 10"
                      {...register("duration", { required: true, min: 1 })}
                    />
                    {errors.duration && (
                      <span className="mt-2 custom-text-color1">
                        This field is required
                      </span>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>
                  Write the name of the places that will be visited in this tour
                  ?
                </Form.Label>
                <Form.Control
                  type="text"
                  {...register("placesToVisit", { required: true })}
                  placeholder="e.g. Jaflong, BichanaKandi"
                />
                {errors.placesToVisit && (
                  <span className="mt-2 custom-text-color1">
                    This field is required
                  </span>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tour Details</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  {...register("traveldetails", { required: true })}
                />
                {errors.traveldetails && (
                  <span className="mt-2 custom-text-color1">
                    This field is required
                  </span>
                )}
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Tour Starts</Form.Label>
                    <Form.Control
                      type="date"
                      {...register("startDate", { required: true })}
                    />
                    {errors.startDate && (
                      <span className="mt-2 custom-text-color1">
                        This field is required
                      </span>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Tour Ends</Form.Label>
                    <Form.Control
                      type="date"
                      {...register("endDate", { required: true })}
                    />
                    {errors.endDate && (
                      <span className="mt-2 custom-text-color1">
                        This field is required
                      </span>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Tour Cost (Per person)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="eg. 3000"
                      {...register("cost", { required: true })}
                    />
                    {errors.cost && (
                      <span className="mt-2 custom-text-color1">
                        This field is required
                      </span>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Things that a travel should keep ?</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="e.g. NID, Passport"
                      {...register("thingsToKeep", { required: true })}
                    />
                    {errors.thingsToKeep && (
                      <span className="mt-2 custom-text-color1">
                        This field is required
                      </span>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <Button type="submit" variant="dark" className="mt-2">
                Add New Tour Package
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddNewTourPack;
