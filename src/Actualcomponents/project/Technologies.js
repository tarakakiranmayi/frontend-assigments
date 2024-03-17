import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Technologies() {
 
  return (
    <div className='m-5 mx-auto d-flex justify-content-space-around' style={{justifyContent:"space-around"}}>
          <div>
            <NavLink to="Java" className='m-1'>
        JAVA
        
            </NavLink>
            </div>
            <div>
            <NavLink to="Sql" className='m-1'>
              SQL
              </NavLink> 
              </div>
              <div>
            <NavLink to="Python" className='m-1'>
           
            Python
            </NavLink>
            </div>
            <Outlet />
      
     
    </div>
  )
}

export default Technologies