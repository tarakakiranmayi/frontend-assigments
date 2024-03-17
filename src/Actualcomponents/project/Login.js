import React from 'react';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {compareSync} from 'bcryptjs'
import { Link } from 'react-router-dom';


function Login() {
    let {register,handleSubmit,formState:{errors}}=useForm()
    let navigate=useNavigate()
    function handleFormSubmit(obj)
    {
       fetch(`http://localhost:4000/user?username=${obj.username}`,
       {
        method:"GET"
       })
       .then((re)=>re.json())
       .then(obj1=>{
        if(obj1.length===0)
        {
            alert("Invalid UserName")
        }
        else{
            let pass=compareSync(obj.password,obj1[0].password)
            if(pass===true)
            { console.log(obj1[0])
                navigate(`/UserDashed/${obj.username}`,{
                    
                    state:obj1[0]

                })
            }
            else{
                alert("Invalid password")
            }
        }
       })
    }
  return (
    <div className='w-50 border-5 mx-auto border-dark shadow-lg my-5 p-3'>
       <h2 className='text-center m-2'>Login</h2>
       <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className=''>
        <lable className="form-lable m-3" htmlFor="username">
        Username
        </lable>
        <input type="text" className='form-control m-3 w-75 ' id="username"
        {
            ...register("username",{required:true,minLength:3})
        } ></input>
        {
            errors.username?.type==='required' && <p className='lead fs-6 text-danger'>Invalid Username</p>   
        }
        {
            errors.username?.type==='minLength' && <p className='lead fs-6 text-danger'>minLenght is 3</p> 
        }
        </div>
       <div>
        <label className='form-label m-3' htmlFor='password'>Password</label>
        <input className='form-control m-3 w-75' type='password' id="password"
        {
            ...register("password",{required:true})
        }
       
        
        ></input>
         {
            errors.password?.type==='required' && <p className='lead fs-6 text-danger'>Password is required</p>
        }
       </div>
       <div className='text-center'>
        <button className='btn btn-success mx-auto' type='submit'>Submit</button>
       </div>
       </form>
       <p className='lead fs-5 text-center'>
        <Link to="/Register" className='m-3'>New user
        </Link>
       </p>
       
    </div>
  )
}

export default Login