
import { useState } from "react";

function Fetchuser(){

   let [c,setC]=useState(0)
   function change()
   {
    setC(c+1)
   }

    return(
        <div className="container">
            <div className="row">
                <h2>{c}</h2>
                <button onClick={change}></button>
            </div>

        </div>
    );
}
export default Fetchuser;