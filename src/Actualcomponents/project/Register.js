import React from 'react'
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {hashSync} from 'bcryptjs'
import { Link } from 'react-router-dom';

function Register() {
    let{register,handleSubmit,formState:{errors}}=useForm()
    let navigate=useNavigate()
    
    function handleFormSubmit(obj)
    { 
        let hash=hashSync(obj.password,5)
        obj.password=hash
        fetch(' http://localhost:3000/user',
        {
            method:"POST",
            headers:{ "Content-Type":"application/json"},
            body:JSON.stringify(obj)
        
        })
        .then(re=>{
           if(re.status===201)
           {
              navigate('/Login')
           }
        }
            )
        .catch(err=>console.log(err))
    }
  return (
    <div className="border p-3 m-3 h-100 w-50 mx-auto mt-5 shadow-lg">
            <h1 className='fs-2 text-primary text-center'>Register</h1>
          <form onSubmit={handleSubmit(handleFormSubmit)} className=''>
        <div className='mb-3'>
            <label htmlFor='username' className='form-label mx-3'>
                Username
                 
            </label>
            <input id="username" className='form-control w-75 mx-3' type="text" {
                ...register("username",{required:true,minLength:4,maxLength:8})
            }/>
            {
                errors.username?.type==='required' && <p className='lead fs-4 text-danger'>Invalid Username</p>}
               { errors.username?.type==='minLength' && <p className='lead fs-4 text-danger'>minLenght is 4</p>}
               { errors.username?.type==='maxLength' && <p className='lead fs-4 text-danger'>maxLenght is 8</p>}
            
        </div>
        <div>
        <label className='form-label mx-3' htmlFor='password'>Password</label>
        <input className='form-control mx-3 w-75' type='password' id="password"
        {
            ...register("password",{required:true})
        }
       
        
        ></input>
         {
            errors.password?.type==='required' && <p className='lead fs-6 text-danger'>Password is required</p>
        }
       </div>
       <div>
        <label className='form-label mx-3' htmlFor='email'>Email</label>
        <input className='form-control mx-3 w-75' type='email' id="email"
        {
            ...register("email",{required:true})
        }
       
        
        ></input>
         {
            errors.email?.type==='required' && <p className='lead fs-6 text-danger'>email is required</p>
        }
       </div>
        <div className='mb-3'>
            <label htmlFor='dob' className='form-label mx-3'>
                Date of Birth
                 
            </label>
            <input id="dob" className='form-control w-75 mx-3' type="date" {
                ...register("dob",{required:true})
            }/>
            {
                errors.dob?.type==='required' && <p className='lead fs-4 text-danger'>Dob is required</p>}
              
            
        </div>
        <div className='mb-3'>
            <label htmlFor='city' className='form-label mx-3'>
                City
                 
            </label>
            <select  id="city" className='mx-3 form-select w-75' {...register("city",{required:true})}>
            <option value="select" disabled selected>Select option</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="mumbai">mumbai</option>
            <option value="Chennai">Chennai</option>
        </select>
        {
            errors.city?.type==='required' && <p className='text-danger'>Select option</p>
        }
            <option>

            </option>
            {
                errors.username?.type==='required' && <p className='lead fs-4 text-danger'>Dob is required</p>}
              
            
        </div>
        <div className='text-center'>
        <button className='btn btn-danger mx-auto' type="submit">Submit</button></div>
         
          </form>
          <p className='lead fs-5 '>
           <Link to="/Login">Already Registered</Link>
          </p>
        </div>
  )
}

export default Register