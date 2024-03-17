import React from 'react'
import {
    setKey,
    setDefaults,
    setLanguage,
    setRegion,
    fromAddress,
    fromLatLng,
    fromPlaceId,
    setLocationType,
    geocode,
    RequestType,
  } from "react-geocode";
function Addresstolat() {
    function change()
    {
        fromAddress("Eiffel Tower")
  .then(({ results }) => {
    const { lat, lng } = results[0].geometry.location;
    console.log(lat, lng);
  })
  .catch(console.error);
    }

  return (
    <div>
    <button className='btn' onClick={change}>Click me</button>
    </div>
  )
}

export default Addresstolat