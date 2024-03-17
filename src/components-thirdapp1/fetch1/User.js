import {useState,useEffect} from 'react';
import Y from '../fetch2/Fetch2'
function User()
{  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(re=>re.json())
    .then(res=>setUser(res))
},[])
    let [user,setUser]=useState([])
    let [counter,setCounter]=useState(0)
    function change()
    {
        setCounter(counter+1)
    }
    return(
        <div className='container'>
            <h3 className=' text-center fs-2 m-3 p-3'>Users : {counter}</h3>
            <div className='row g-3'>
            {
                user.map((emp)=><Y data={emp} fun={change}/>)
            }
            </div>
         
        </div>
    );
}
export default User;