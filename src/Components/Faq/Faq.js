import React from "react";
import { Accordion, Container, Row } from "react-bootstrap";
import "./Faq.css";

const Faq = () => {
  return (
    <section>
      <Container className="faq">
        <h1 className="text-center fw-bold mb-5">Frequently Asked Questions</h1>
        <Row>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Are there any extra fees that I have to pay ?
              </Accordion.Header>
              <Accordion.Body>
                No, we do not charge any extra fees or fuel surcharges. The
                listed price is the price you pay. Including tax.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Should I Print a receipt to show the tour guide ?
              </Accordion.Header>
              <Accordion.Body>
                We understand that you may not have a printer handy when you’re
                traveling so it is not necessary to have a printed copy.
                However, we require that you show ID matching your reservation
                and also the Order # that is immediately emailed to you after
                you make your reservation.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Are there any particular Dress Code ?
              </Accordion.Header>
              <Accordion.Body>
                Wear whatever is comfortable. It is recommended to have a sturdy
                pair of broken-in trail shoes, boots, or sneakers. It is
                preferable to dress in layers and wear clothing that will wick
                away perspiration and keep you dry and comfortable
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
