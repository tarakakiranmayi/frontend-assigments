import {useForm} from 'react-hook-form';
import { useContext } from 'react';
import { CounterContext } from '../../Context/CounterContext';

function CounterContextFrom()
{  let{register,handleSubmit,formState:{errors}}=useForm()
let [user,setUser]=useContext(CounterContext)
   

    function handleFormSubmit(obj)
   {
        setUser([...user,obj])
   }

    return(
        <div className=" p-3 m-3 h-100">
            <h1 className='fs-2 bg-primary text-center'>Registration Form</h1>
          <form onSubmit={handleSubmit(handleFormSubmit)} className='mx-auto'>
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
        <button className='btn btn-danger m-3' type="submit">Submit</button>
         
          </form>
        </div>
    );
}
export default CounterContextFrom;