import React from 'react'
import Stalls from './Stalls';
function Stall() {
    let stall=[
        {
            "id": 5,
            "name": "Birla Mandir",
            "latitude": 17.4062,
            "longitude": 78.4691
        },
        {
            "id": 6,
            "name": "Salar Jung Museum",
            "latitude": 17.3713,
            "longitude": 78.4804
        },
        {
            "id": 7,
            "name": "Ramoji Film City",
            "latitude": 17.2543,
            "longitude": 78.6808
        },
        {
            "id": 8,
            "name": "Nehru Zoological Park",
            "latitude": 17.3474,
            "longitude": 78.4513
        }
    ]
    const latitude = 17.385;
    const longitude = 78.486;
  
    function changeto()
    {
        const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        window.open(url, '_blank');
      };
    
    
  return (
    <div>
        <div className='container'>
            <div className='row g-3 '>
                {
                stall.map((item)=>
                 <Stalls data={item}/>
                )
            }
            </div>

        </div>
    </div>
  )
}

export default Stall