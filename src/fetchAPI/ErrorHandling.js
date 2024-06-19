import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner';

export const ErrorHandling = () => {
  let [Jsondata, setData] = useState([]);
  let [loading,setLoading] = useState(true);
  let [error,setError] = useState(null);
  
  useEffect(() => {
    let APIfetch = async () => {
        
        try{
            let res = await fetch("http://localhost:4000/products");

            let data = await res.json();
            
            setData(data);
        }
        catch(error)
        {
            setError(error.message);
        }
        finally
        {
            setLoading(false)
        }


    };

        setTimeout(() => { APIfetch()},3000)
  }, []);


  if(loading)
    {
        return(
        <div>
        <h1>Loading... <Spinner animation="border" /></h1>
        </div>)
    }

  else if(error)
    {
        return(<h1>{error}</h1>)
    }  
    
  else 
      {return (
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
          )}
    
 
};
