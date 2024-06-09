import React, { useContext } from 'react'
import { Context } from './Parent'

export const DeepChild = () => {

let dataFromContext = useContext(Context)

  return (
    <div>
      <h1>{dataFromContext}</h1>

      <Context.Consumer>
      {
      (data) => <h3>{data}</h3>
      }

      </Context.Consumer>
    </div>
    
  )
}
