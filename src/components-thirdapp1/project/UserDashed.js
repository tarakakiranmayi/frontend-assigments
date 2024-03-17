import React from 'react'
import { useLocation } from 'react-router-dom'

function UserDashed() {
 let {state}=useLocation()
  return (
    <div>
        <h1 className='text-center' >WELCOME</h1>
    <div  className='justify-content-end d-flex'>
        <ul style={{listStyle:"none"}}> 
            <li>{state.username}</li>
            <li>{state.email}</li>
            <li>{state.dob}</li>
        </ul>
        </div>
    </div>
  )
}

export default UserDashed