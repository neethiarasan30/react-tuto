import React, { useState } from 'react'

export const CreateProduct = () => {

    let[input,setInput] = useState({
    title: "",
    price: 25,
    description: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: 45
    })

    let handleChange = (e) => {
        let{name,value} = e.target
        setInput({...input,[name]: value})

    } 

    let handleSubmit = (e)=>{
        e.preventDefault()
        console.log(input);

        fetch("http://localhost:4000/products", {
            "method":"POST",
            "headers":{
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(input)
        }).then(()=>{console.log("data added success");}).catch(("data added error"))
    }

  return (
    <div>
        <h1>CreateProduct</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name='title'
                placeholder='title'
                value={input.title}
                onChange={(e)=>{handleChange(e)}}
            />
            <input
                type="text"
                name='description'
                placeholder='Description'
                value={input.description}
                onChange={(e)=>{handleChange(e)}}
            />
            <input
                type="number"
                name='price'
                placeholder='Price'
                value={input.price}
                onChange={(e)=>{handleChange(e)}}
            />
            <input
                type="number"
                name='rating'
                placeholder='Rating'
                value={input.rating}
                onChange={(e)=>{handleChange(e)}}
            />
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
