import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./TourPack.css";
import { Link } from "react-router-dom";

const TourPack = (props) => {
  const {
    name,
    placesToVisit,
    startDate,
    endDate,
    traveldetails,
    thingsToKeep,
    cost,
    img,
    _id,
  } = props.info;
  return (
    <Col>
      <Card className="h-100 bg-transparent tourCard">
        <Card.Img src={img} className="img-fluid" />
        <Card.Body className="pb-0">
          <h5 className="fw-bold">{name}</h5>
          <p>{_id}</p>
          <p className="custom-text-color1">
            {startDate} - {endDate}
          </p>
          <p className="text-secondary">
            <strong>Places to cover :</strong> {placesToVisit}
          </p>
          <p className="text-secondary">{traveldetails}</p>
          <p className="custom-text-color2">
            {" "}
            ** N.B. You must keep {thingsToKeep}
          </p>
        </Card.Body>
        <Card.Footer className="bg-transparent border-0 pb-4">
          <h4 className="custom-text-color1 pb-2">BDT {cost}</h4>
          <div className="d-grid gap-2">
            <Button variant="outline-dark">View Details</Button>
            <Button
              as={Link}
              to={`/placeOrder/${_id}`}
              className="custom-btn-color"
            >
              Book Now
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default TourPack;
