import React, { Children, useState } from 'react'
import { FuncChildComp } from './FuncChildComp'
import { ChildrenProps } from './ChildrenProps'



export const ParentComp = () => {

  let[fd,ChangeState]   = useState(["react","angular"])

 
  return (
    <div>
        {/* <FuncChildComp data={"Mani"} arr={fd}/> */}

        {/* <ClassChildComp data = {fd}/> */}

        <ChildrenProps>

        <h1>react basics</h1>

        </ChildrenProps>
    </div>
  )
}
