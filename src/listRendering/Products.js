import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Products = () => {
  let [item] = useState([
    { id: 1, pName: "SamSung", price: 15000 },
    { id: 2, pName: "Xiaomi", price: 25000 },
    { id: 3, pName: "MI", price: 20000 },
    { id: 4, pName: "POCO", price: 10000 },
    { id: 5, pName: "OnePlus", price: 30000 },
  ]);

  return (
    <div className="container">
        <section className="row">
        {item.map((product, ind) => (
        <Card style={{ width: "18rem" }} key = {product.id}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREobxmBv11inaqdAFtqi67T1PJSW-cmXKBXQ&s" />
          <Card.Body>
            <Card.Title>{product.pName}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
        </section>
    </div>
  );
};
