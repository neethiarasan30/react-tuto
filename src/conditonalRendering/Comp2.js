// import { useState } from "react"

// function Comp2()
// {
//     let[toggle,changeState] = useState(true);

//     function change()
//     {
//         changeState(!toggle)
//     }

//     return(
//        <div>
//         <button onClick={change}>Change</button>
//         {toggle ? <h1>React</h1> : <h2>Angular</h2>}
//        </div>
//     )
// }

// export {Comp2}

  



import { useState } from "react"

function Comp2()
{
    let[toggle,changeState] = useState(true);

    function change()
    {
        changeState(!toggle)
    }

    return(
       <div>
        <button onClick={change}>Change</button>
        {toggle ? <CompTrue/> : <CompFalse/>}
       </div>
    )
}

export {Comp2}




function CompTrue() {
    return (
        <h1>CompTrue</h1>
    )
}
function CompFalse() {
    return (
        <h1>CompFalse</h1>
    )
}