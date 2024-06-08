import { useState } from "react"

function Comp1()
{
    let[toggle,changeState] = useState(true);

    function change()
    {
        changeState(!toggle)
    }

    return(
       <div>
        <button onClick={change}>Change</button>
        {toggle && <h1>Conditional Rendering</h1>}
       </div>
    )
}

export {Comp1}

  