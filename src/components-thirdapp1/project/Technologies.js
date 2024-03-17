import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Technologies() {
 
  return (
    <div className='m-5 mx-auto d-flex justify-content-space-around' style={{justifyContent:"space-around"}}>
          <div>
            <NavLink to="Java" className='m-1'>
         <img src="https://www.gcreddy.com/wp-content/uploads/2021/05/Java-Programming-Language.png" width="120px" alt=""/>
        
            </NavLink>
            </div>
            <div>
            <NavLink to="Sql" className='m-1'>
              <img src="https://static.tildacdn.com/tild6238-3035-4335-a333-306335373139/IMG_3349.jpg" width="120px" alt=""/>
              </NavLink> 
              </div>
              <div>
            <NavLink to="Python" className='m-1'>
           
            <img src="https://developers.redhat.com/sites/default/files/styles/article_feature/public/Python-01%20%282%29.png?itok=TEVIQBQo" width="120px" alt=""/>
            </NavLink>
            </div>
            <Outlet />
      
     
    </div>
  )
}

export default Technologies