import React from 'react';

function Hotstops(props) {
  function changeto() {
    const url = `https://www.google.com/maps/search/?api=1&query=${props.data.latitude},${props.data.longitude}`;
    window.open(url, '_blank');
  }

  return (
    <div className='col-lg-4'>
      <div className='card'>
        <div className='card-image'>
         
        </div>
        <div className='card-body'>
          <h3>{props.data.AreaName}</h3>
          <p>lorem20</p>
          <div className='card-footer'>
            <h6>----Contact Details of Head----</h6>
            <h5>{props.data.HeadPerson.name}</h5>
            <h5>{props.data.HeadPerson['phone-number']}</h5>
            <h5>{props.data.HeadPerson.email}</h5>
            <button className='btn btn-success' onClick={changeto}>
              Navigate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotstops;