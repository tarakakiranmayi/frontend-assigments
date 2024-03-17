import { useState } from "react";
import A from '../AddTask/Addtask';
import B from '../ListTask/Listtask';
import C from '../CountTask/Counttask';

function Manager()
{
    let[user,setUser]=useState([])
    
    return(
        <div className="w-75 border-dark m-5 p-2 mx-auto">
            <div className="row g-3 border mx-auto">
              <div className="col-sm-6 h-100"><A  setUser={setUser} user={user}/></div>
              <div className="col-sm-6 h-100"><B user={user}/></div>
             
            </div>

        </div>
    );
}
export default Manager;