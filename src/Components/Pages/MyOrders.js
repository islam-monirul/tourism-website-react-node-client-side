import React, { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();

  const [mylist, setMylist] = useState([]);

  const useremail = user.email;

  useEffect(() => {
    fetch(`https://scary-coffin-51525.herokuapp.com/myorders/${useremail}`)
      .then((res) => res.json())
      .then((data) => setMylist(data));
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
            alert("Sucessfully Deleted!!");
            const remainingOrders = mylist.filter((order) => order._id !== id);
            setMylist(remainingOrders);
          }
        });
    }
  };

  return (
    <section className="py-5">
      <Container>
        <Row>
          <h1 className="text-center pb-5">My Orders</h1>
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
              {mylist.map((order) => (
                <tr className="align-middle">
                  <td>{order.name}</td>
                  <td>{order.selectedPack}</td>
                  <td>{order.cost}</td>
                  <td>{order.status === 0 ? "Pending" : "Completed"}</td>
                  <td>
                    <Button variant="warning" className="d-block mx-auto">
                      Complete
                    </Button>
                  </td>
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
        </Row>
      </Container>
    </section>
  );
};

export default MyOrders;
