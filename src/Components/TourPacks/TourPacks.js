import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import TourPack from "./../TourPack/TourPack";
import "./TourPacks.css";

const TourPacks = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("https://scary-coffin-51525.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);

  return (
    <section className="bg-light">
      <Container className="allTours">
        <h1 className="text-center fw-bold mb-5">Upcoming Tours</h1>
        <Row
          xs={1}
          md={2}
          lg={3}
          className="g-5 py-4"
          style={{ marginRight: "0", marginLeft: "0" }}
        >
          {tours.map((tour) => (
            <TourPack key={tour.id} info={tour}></TourPack>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TourPacks;
