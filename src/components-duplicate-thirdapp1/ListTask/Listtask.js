

function Listtask(props)
{
    return(
        <div className="border p-3 m-3 h-100 ">
             <h1 className="text-center">List Task</h1>
             
                 <table className="table table-bordered p-3">
                    <thead>
                        <tr>
                            <th>UserName</th>
                            <th>Date Of Birth</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.user.map((emp,index)=>
                            <tr key={index}>
                                <td>{emp.username}</td>
                                <td>{emp.dob}</td>
                                <td>{emp.city}</td>
                            </tr>
                            )
                            }
                    </tbody>
                 </table>
    
               
                
                
                
             

        </div>
    );
}
export default Listtask;