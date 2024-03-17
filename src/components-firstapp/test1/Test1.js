import { useState } from "react";
import U from '../test2/Test2';
function Test1()
    {
          let [counter,setCounter]=useState(0)
        function shift()
        {
         setCounter(counter+1)
        }
        function unshift()
        {
            setCounter(counter-1)
        }
         return(
            <div className="w-50 d-block mx-auto border-3 bg-success">
                <h5>Parent here</h5>
                <h6>{counter}</h6>
                <U data={counter} fun={shift} func={unshift}/>
               
            </div>
         );
    }
export default Test1;
