 import React from 'react';
import { useForm } from 'react-hook-form';

function Register() {
  // state
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let displayUserDetails = function (userData) {
    console.log(userData);
  };

  return (
    <div className='w-50 mx-auto mt-5 mb-5 bg-white p-5 rounded-3 shadow-lg'>
      <form className='d-flex flex-wrap' onSubmit={handleSubmit(displayUserDetails)}>
        <h1 className='display-6 w-100 mb-5 mt-2'>Registration Form</h1>
        {/* ... (previous form fields) ... */}
        <div className='form-group mb-4'>
          <label htmlFor='phone' className='form-label'>
            Phone Number
          </label>
          <input
            type='number'
            className='form-control bg-light'
            id='phone'
            autoComplete='off'
            {...register('phone', { required: true, minLength: 10, maxLength: 10 })}
          />
          {errors.phone?.type === 'required' && <p className='text-danger lead'>Phone Number is required</p>}
          {errors.phone?.type === 'minLength' && (
            <p className='text-warning lead'>Phone Number should be 10 digits</p>
          )}
          {errors.phone?.type === 'maxLength' && (
            <p className='text-warning lead'>Phone Number should be 10 digits</p>
          )}
        </div>
        <div className='form-group mb-4'>
          <label htmlFor='hoursOfService' className='form-label'>
            Hours of Service
          </label>
          <input
            type='number'
            className='form-control bg-light'
            id='hoursOfService'
            autoComplete='off'
            {...register('hoursOfService', { required: true })}
          />
          {errors.hoursOfService?.type === 'required' && (
            <p className='text-danger lead'>Hours of Service is required</p>
          )}
        </div>
        <div className='form-group mb-4 d-flex flex-wrap'>
          <label className='form-label w-100'>Availability</label>
          {/* Checkboxes for each day */}
          {['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].map(
            (day) => (
              <div className='form-check me-5' key={day}>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id={day}
                  value={day}
                  {...register('availability', { required: true })}
                />
                <label htmlFor={day} className='form-check-label'>
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </label>
              </div>
            )
          )}
          {errors.availability?.type === 'required' && (
            <p className='text-danger lead'>Availability is required</p>
          )}
        </div>
        <button type='submit' className='btn btn-primary w-25 mt-3'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
