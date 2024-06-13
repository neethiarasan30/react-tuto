import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

export const Json = () => {
  let [Jsondata, setData] = useState([]);

  useEffect(() => {
    let APIfetch = async () => {
      let res = await fetch("http://localhost:4000/products");

      let data = await res.json();

      console.log(data);

      setData(data);
    };

    APIfetch()
  }, []);

  return (
    <div className="container">

        <section className="row">
        {Jsondata.map((item) => (
        <Card style={{ width: "18rem" }} key={item.id}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>    
            <Card.Text>{item.price}</Card.Text>    
            <Card.Text>{item.description}</Card.Text>    
          </Card.Body>
        </Card>
      ))}
        </section>   

      
    </div>
  );
};
