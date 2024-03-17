
import React, { useState } from 'react';

const NearbyPlaces = () => {
  const [places, setPlaces] = useState([]);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  };

  const getNearbyPlaces = (latitude, longitude) => {
    const locations = [
      { name: 'Place 1', latitude: 17.385, longitude: 78.486 },
      { name: 'Place 2', latitude: 17.6868, longitude: 83.2185 },
      // Add more places as needed
    ];

    const nearbyPlaces = locations.filter((location) => {
      const distance = calculateDistance(latitude, longitude, location.latitude, location.longitude);
      return distance <= 10; // Set the distance threshold (in km) here
    });

    setPlaces(nearbyPlaces);
  };

  const handleGetNearbyPlaces = () => {
    const latitude = 17.385;
    const longitude = 78.486;
    getNearbyPlaces(latitude, longitude);
  };

  return (
    <div>
      <button onClick={handleGetNearbyPlaces}>Get Nearby Places</button>
      <ul>
        {places.map((place, index) => (
          <li key={index}>{place.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NearbyPlaces;
