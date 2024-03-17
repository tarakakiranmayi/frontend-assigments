import React from 'react'
import Navigator from './Navigator';
import Footer from './Footer';

import { Outlet } from 'react-router-dom';

function Rootcomponent() {
  return (
   <div>
        <Navigator/>
        <div style={{ minHeight: "85vh" , marginBottom :"3px"}}>
        <Outlet />
      </div>
        <Footer/>
        </div>
        
   
  )
}

export default Rootcomponent