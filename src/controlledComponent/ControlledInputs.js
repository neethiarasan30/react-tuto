import React, { useState } from 'react'

export const ControlledInputs = () => {
    
    let[input,setInput] = useState("")
 
    return (
    <div>
       <form>
            <input
               value={input}
               onChange={(event) => {setInput(event.target.value)}}
            />
       </form>
       <h1>{input}</h1>
    </div>
  )
}
