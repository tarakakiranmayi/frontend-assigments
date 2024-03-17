
import React from 'react';

const Map = () => {
  const latitude = 17.385;
  const longitude = 78.486;

  const handleOpenMap = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <h1>Latitude: {latitude}</h1>
      <h1>Longitude: {longitude}</h1>
      <button onClick={handleOpenMap}>Open in Google Maps</button>
    </div>
  );
};

export default Map;
