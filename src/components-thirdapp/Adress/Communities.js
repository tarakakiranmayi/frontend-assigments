import React from 'react'

function Communities(props) {
    function changeto()
    {
        const url = `https://www.google.com/maps/search/?api=1&query=${props.data.latitude},${props.data.longitude}`;
        window.open(url, '_blank');
      };
    console.log(props.data)
    
  return (
    <div className='col-lg-4'>
       
             
                  
                    <div className='card'>
                        <div className='card-image'>
                            <img/>
                            </div>
                        <div className='card-body'>
                            <h3>{props.data.Name}</h3>
                            <h4>{props.data.CommunityType}</h4>
                            <p>lorem20
                            </p>
                            <div className='card-footer'>
                                <h6>----Contact Deatils of Head----</h6>
                                <h5>{props.data.CommunityHeadDetails.Name}</h5>
                                <h5>{props.data.CommunityHeadDetails.PhoneNo}</h5>
                                <h5>{props.data.CommunityHeadDetails.Email}</h5>
                            <button className='btn btn-success' onClick={changeto}>Navigate</button>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                
  )
}

export default Communities