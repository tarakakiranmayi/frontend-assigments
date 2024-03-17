import React from 'react'

function Stalls(props) {
    
    
  
    function changeto()
    {
        const url = `https://www.google.com/maps/search/?api=1&query=${props.data.latitude},${props.data.longitude}`;
        window.open(url, '_blank');
      };
    
    
  return (
    <div className='col-lg-4'>
       
             
                  
                    <div className='card'>
                        <div className='card-image'>
                            <img/>
                            </div>
                        <div className='card-body'>
                            <h3>{props.data.name}</h3>
                            <p>lorem20
                            </p>
                            <button className='btn btn-success' onClick={changeto}>Navigate</button>
                        </div>
                    </div>
                    </div>
                

    
  
  )
}

export default Stalls