import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Product = () => {
    
    let[products,changeState]  = useState([])


    let APIfetch = async() => {
        let res = await fetch("https://fakestoreapi.com/products")

        let data = await res.json()

        changeState(data)
    }

    APIfetch()

  return (
    <div className="container">
        <section className="row">
        {products.map((product, ind) => (
        <Card style={{ width: "18rem" }} key = {product.id}>
          <Card.Img variant="top" src= {product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <Card.Text>{product.description}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
        </section>
    </div>
  );
};
