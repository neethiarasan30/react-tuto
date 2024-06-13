import React, { useState } from 'react'

export const SideEffects = () => {

    let[count,setCount]    = useState(0)

    function fetchAPI()
    {
        console.log("API fetched");
    }

    fetchAPI()

  return (
    <div>
      <button onClick={() => {setCount(count+1)}}>+</button>
      <h1>{count}</h1>
      <button onClick={() => {setCount(count-1)}}>-</button>
    </div>
  )
}
