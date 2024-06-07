//function component -- stateless component

// function FuncComp()
// {
//     let count = 0;

//     function increase()
//     {
//         count = count+1
//         console.log(count);
//     }

//     function decrease()
//     {
//         count = count-1
//         console.log(count);
//     }
//     return(
//         <div>
//             <h1>React Tutorial</h1>

//             <button onClick={increase}>+</button>
//             <h1>{count}</h1>
//             <button onClick={decrease}>-</button>
//         </div>
       
//     )
// }

// export  {FuncComp}












//functional component -- statefull component
import {useState} from 'react';
function FuncComp()
{
    let[count,changeCount]   = useState(0)

    function increase()
    {
        //immutable update
    //    changeCount((prevCount) => prevCount+1)
    //    changeCount((prevCount) => prevCount+1)
    //    changeCount((prevCount) => prevCount+1)
       

       //mutable update
        changeCount(count+1)
    }

    function decrease()
    {
        changeCount(count-1)
    }
    return(
        <div>
            <h1>React Tutorial</h1>

            <button onClick={() => increase()}>+</button>
            <h1>{count}</h1>
            <button onClick={() => decrease()}>-</button>
        </div>
       
    )
}

export  {FuncComp}









