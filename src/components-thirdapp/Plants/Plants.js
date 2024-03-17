import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Plants() {
  return (
    <div>
        {/* header part goes here */}
        <div className='col-lg-12 row'>
            <div className='col-lg-1'><Link to=''>plant1</Link></div>
            <div className='col-lg-1'><Link to=''>plant2</Link></div>
            <div className='col-lg-1'><Link to=''>plant3</Link></div>
            <div className='col-lg-1'><Link to=''>plant4</Link></div>
            <div className='col-lg-1'><Link to=''>plant5</Link></div>
            <div className='col-lg-1'><Link to=''>plant6</Link></div>
            <div className='col-lg-1'><Link to=''>plant7</Link></div>
            <div className='col-lg-1'><Link to=''>plant8</Link></div>
            <div className='col-lg-1'><Link to=''>plant9</Link></div>
        </div>
        <div className='col-lg-12'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Plants