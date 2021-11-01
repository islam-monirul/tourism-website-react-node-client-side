import React, { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ManageAllOrders = () => {
  const [allorders, setAllOrders] = useState([]);

  let history = useHistory();

  useEffect(() => {
    fetch(`https://scary-coffin-51525.herokuapp.com/allorders`)
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  //   delete an order
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");

    if (proceed) {
      const url = `https://scary-coffin-51525.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingOrders = allorders.filter(
              (order) => order._id !== id
            );
            setAllOrders(remainingOrders);
            history.push("/success");
          }
        });
    }
  };

  // update an order
  const handleUpdate = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to Complete the order?"
    );

    if (proceed) {
      const updatedOrder = allorders.find((order) => order._id === id);
      updatedOrder.status = 1;

      console.log(updatedOrder);

      fetch(`https://scary-coffin-51525.herokuapp.com/updateOrder/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedOrder),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            history.push("/success");
          }
        });
    }
  };

  return (
    <section className="py-5">
      <Container>
        <Row>
          <h1 className="text-center pb-5">All Orders</h1>
          {allorders.length > 0 ? (
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Package</th>
                  <th>Cost</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {allorders.map((order) => (
                  <tr className="align-middle">
                    <td>{order.name}</td>
                    <td>{order.selectedPack}</td>
                    <td>{order.cost}</td>
                    <td>{order.status === 0 ? "Pending" : "Completed"}</td>
                    {order.status === 0 && (
                      <td>
                        <Button
                          variant="success"
                          className="d-block mx-auto"
                          onClick={() => handleUpdate(order._id)}
                        >
                          Complete
                        </Button>
                      </td>
                    )}
                    <td>
                      <Button
                        variant="danger"
                        className="d-block mx-auto"
                        onClick={() => handleDelete(order._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p className="text-center text-danger">No Orders Found.</p>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default ManageAllOrders;
