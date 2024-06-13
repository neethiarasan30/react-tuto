import React, { useEffect, useState } from 'react'

export const UseEffect = () => {

    let[count,setCount]    = useState(0)

    let[count1,setCount1]    = useState(5)


    // useEffect(()=> {
    //     function fetchAPI()
    //     {
    //         console.log("API fetched");
    //     }

    //     fetchAPI()
    // })



    // useEffect(()=> {
    //     function fetchAPI()
    //     {
    //         console.log("API fetched");
    //     }

    //     fetchAPI()
    // },[])


    useEffect(()=> {
        function fetchAPI()
        {
            console.log("API fetched");
        }

        fetchAPI()
    },[count])


  return (
    <div>
      <button onClick={() => {setCount(count+1)}}>+</button>
      <h1>{count}</h1>
      <button onClick={() => {setCount(count-1)}}>-</button>

        <br/>

      <button onClick={() => {setCount1(count1+1)}}>+</button>
      <h1>{count1}</h1>
      <button onClick={() => {setCount1(count1-1)}}>-</button>
    </div>
  )
}
