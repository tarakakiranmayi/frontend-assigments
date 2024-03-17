import '../timepass/timepass.css'
import { useForm } from 'react-hook-form';
function Timepass()
{  let { register,handleSubmit,formState:{errors}}=useForm()
      function handleFormSubmit(obj)
      {
            console.log(obj);
      }
    return(
        <div className="conatiner bg-success">
            <div className='d-block row mx-auto bg-white'>
            <form className='w-50 mx-auto border-3 border-dark m-5 ' onSubmit={handleSubmit(handleFormSubmit)}>
                <h5 className='m-2 text-center'>Registration Form</h5>
            <div className='row g-3 m-3 '>
                <div className='col-sm-6 '>
                    <label className="form-label" htmlFor='username'>First Name
                    </label>
                    <input type="text" id="username" className='form-control' placeholder="Ex..John" autocomplete="off" {...register("username",{ required:true,minLength:3})}></input>
                    {
                        errors.username?.type==='required' && <p className='text-danger'>First name is required</p>
                    }
                    {
                        errors.username?.type==='minLength' && <p className='text-danger'>Minimun 3 letters required</p>
                    }
                </div>
                <div className='col-sm-6'>
                <label className="form-label" htmlFor='username1'>Last Name
                    </label>
                    <input type="text" id="username1" className='form-control' {...register("username1",{ required:true,minLength:3})}></input>
                    {
                        errors.username1?.type==='required' && <p className='text-danger'>Last name is required</p>
                    }
                       {
                        errors.username1?.type==='minLength' && <p className='text-danger'>Minimun 3 letters required</p>
                    }
                </div>
            </div>
            <div className='row m-3 g-3'>
                <div className='col-sm-6'>
                <label className="form-label" htmlFor='date1'>Birth-day
                    </label>
                    <input type="date" id="date1" className='form-control' {...register('date1',{required:true})}></input>
                    {
                        errors.date1?.type==='required' && <p className='text-danger'>Date is required</p>
                    }
                </div>
                <div className='col-sm-6'>
                <lable className="form-lable">Gender</lable>
                    <div className='row g-3 mt-1'>
                    
                <div className='col-sm-6'>
                   <input type="radio" id="male" name="gender" className='m-1'/>
                   <lable htmlFor="male">Male</lable>
                   </div>
                   <div className='col-sm-6'>
                   <input type="radio" id="female" name="gender"  className='m-1'/>
                   <lable  htmlFor="female">Female</lable>
                   </div>
                   </div>
                </div>
            </div>
            <div className='row m-3 g-3'>
                <div className='col-sm-6'>
                    <lable htmlFor="email" className="form-lable">Email</lable>
                    <input id="email1" type="email"  className='form-control' {...register("email1",{required:true,minLength:13})}/>    
                    {
                        errors.email1?.type==='required' && <p className='text-danger'>Email is required</p>
                    }  
                      {
                        errors.email1?.type==='minLength' && <p className='text-danger'>Minimun 13 letters required</p>
                    }          
                    </div>
                <div className='col-sm-6'>
                <lable htmlFor="phone" id="phno"  className="form-lable">Phone Number</lable>
                    <input id="phno" type="text"  className='form-control' {...register("phno",{required:true,maxLength:10})}/>  
                    {
                        errors.phno?.type==='required'&& <p className='text-danger'>Phone Number is required</p>
                    }
                      {
                        errors.phno?.type==='maxLength' && <p className='text-danger'>maxLength 10 letters only</p>
                    }
                </div>
            </div>
            <div className='row m-3'>
                <div className='col-sm-12'>
                 
                <label htmlFor="state" className='form-label'>Subject</label>
            <select  id="state" className='w-100 form-select' {...register("state",{required:true})}>
            <option value="select" disabled selected>Select option</option>
            <option value="good">Good</option>
            <option value="bad">Bad</option>
            <option value="worst">Worst</option>
        </select>
        {
            errors.state?.type==='required' && <p className='text-danger'>Select option</p>
        }
                </div>
             
            </div>
            <button className='btn btn-success d-block mx-auto m-3'>Submit</button>
          </form>
          </div>
        </div>
    );

}
export default Timepass;