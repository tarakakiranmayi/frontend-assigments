import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import "./Navigator.css"

function Navigator() {
  return (
   <nav className=' navbar navbar-expand justify-content-end m-1'>
   <div className='collapse navbar-collapse justify-content-end'>
   <ul className="navbar-nav mr-3" style={{marginRight:"35px"}}>
      <li className="nav-item mx-4">
        <NavLink className="nav-link" to="">Home</NavLink>
      </li>
      <li className="nav-item mx-4">
        <NavLink className="nav-link" to="Register">Register</NavLink>
      </li>
      <li className="nav-item mx-4">
        <NavLink className="nav-link" to="Login">Login</NavLink>
      </li>
    
      <li className="nav-item mx-4">
       
        <NavLink className="nav-link" to="Technologies">Technologies</NavLink>

       
      </li>
    </ul>
   </div>
 
   </nav>
  )
}

export default Navigator