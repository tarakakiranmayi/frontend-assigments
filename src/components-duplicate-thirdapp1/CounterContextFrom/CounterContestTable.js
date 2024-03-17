import { useContext } from 'react';
import { CounterContext } from '../../Context/CounterContext';
function CounterContextTable()
{  
    let [user,setUser]=useContext(CounterContext)
    return(
        <div className=" p-3 m-3 h-100 ">
             <h1 className="text-center text-white bg-success">List Task</h1>
             {
                user.length===0?<p className='lead fs-1 text-danger text-center'>No Users</p>:
                
             
                 <table className="table table-bordered table-dark table-border-white p-3">
                    <thead>
                        <tr>
                            <th>UserName</th>
                            <th>Date Of Birth</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((emp,index)=>
                            <tr key={index}>
                                <td>{emp.username}</td>
                                <td>{emp.dob}</td>
                                <td>{emp.city}</td>
                            </tr>
                            )
                            }
                    </tbody>
                 </table>
}
    
               
                
                
                
             

        </div>
    );
}
export default CounterContextTable;