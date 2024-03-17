import { useState,useEffect } from "react";
function Usertable()
{ let[user,setUser]=useState([])
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(re=>re.json())
    .then(res=>setUser(res))}
    ,[])
    return(
        <div className="container">
          {
            user.length==0?<p>No users</p>:
            <table className="table p-3 table-bordered m-3">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {
                   user.map((emp)=>
                   
                    <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.username}</td>
                    <td>{emp.email}</td>
                </tr>
                   )
                }
            </tbody>
        </table>
          }
        </div>
    );
}
export default Usertable;