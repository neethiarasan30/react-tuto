import React, { createContext, useContext, useState } from 'react'
import { DeepChild } from './DeepChild'

export let Context  = createContext()

export const Parent = () => {

  let[val]  = useState("Message from Parent Component")

  

  return (
   

        <Context.Provider value={val}>
           <div>
            <DeepChild/>
           </div>
        </Context.Provider>
 
  )
}
