import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
export const Products = () => {
  let [products, setProducts] = useState([]);

  let navigate = useNavigate()

  useEffect(() => {
    let APIfetch = async() => {
      let res = await fetch("http://localhost:4000/products");

      let data = await res.json();

      setProducts(data);
    };

    APIfetch();
  });

  let handleDelete = (id)=>{
      axios.delete(`http://localhost:4000/products/${id}`)
      navigate('/products')
  }

  return (
    <div className="container">
        <section className="row">
      {products.map((product) => (
        <Card style={{ width: "18rem" }} key={product.id}>
          <Card.Img variant="top" src={product.image}/>
          <Card.Body>
            <Card.Title>Title:{product.title}</Card.Title>
            <Card.Text>Price:{product.price}</Card.Text>
            <Card.Text>Description:{product.description}</Card.Text>
            <Card.Text>Category:{product.category}</Card.Text>
          </Card.Body>
          <button onClick={()=>{navigate(`/update/${product.id}`)}}>Update</button>
          <button onClick={()=>{handleDelete(product.id)}}>Delete</button>
        </Card>
        
      ))
      }
      </section>
    </div>
  );
};
