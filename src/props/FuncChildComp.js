// import React from 'react'

// export const FuncChildComp = (props) => {
//   return (
//     <div>
//         <h1>Functional Child Component</h1>
//         <h1>{props.data}</h1>
//     </div>
//   )
// }


//destructuring the props
import React from 'react'

export const FuncChildComp = (props) => {
    let{data,arr,id}  = props
  return (
    <div>
        <h1>Functional Child Component</h1>
        <h1>{data}</h1>
        <h1>{JSON.stringify(arr)}</h1>
        <h1>{id}</h1>
    </div>
  )
}

//default props
FuncChildComp.defaultProps = {
    id: "Neethi"
}