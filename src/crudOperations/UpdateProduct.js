import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export const UpdateProduct = () => {
  
    let{id}=useParams()

    let navigate = useNavigate()
  
    let[input,setInput] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:4000/products/${id}`)
        .then((res)=>{setInput(res.data)})
    },[])

    let handleChange = (e)=> {
        let{name,value} = e.target
        setInput({...input,[name]:value})
    }

    let handleUpdate = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:4000/products/${id}`,input)
        .then(()=>{navigate('/products')})
    }

    return (
    <div>
         <h1>CreateProduct</h1>
        <form onSubmit={handleUpdate}>
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
