import React, { useState } from 'react'
import { Child2 } from './Child2'

export const Child1 = () => {

   let[data] = useState("message from parent component")

  return (
    <div>
        <h1>Prop Drilling</h1>


        <Child2 message={data}/>
    </div>
  )
}
