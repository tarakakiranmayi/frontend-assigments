
function getDirectionsUrl(origin, destination) {
  const baseUrl = "https://maps.googleapis.com/maps/api/directions/json";
  const params = {
    origin: origin,
    destination: destination,
  };
  const queryString = Object.keys(params)
    .map((key) => key + "=" + encodeURIComponent(params[key]))
    .join("&");
  return `${baseUrl}?${queryString}`;
}

function calculateDistanceAndRoute(origin, destination) {
  const directionsUrl = getDirectionsUrl(origin, destination);

  fetch(directionsUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "OK") {
        const distance = data.routes[0].legs[0].distance.text;
        const steps = data.routes[0].legs[0].steps.map((step) => step.html_instructions);
        console.log("Distance:", distance);
        console.log("Route steps:", steps);
      } else {
        console.error("Failed to fetch directions:", data.status);
      }
    })
    .catch((error) => {
      console.error("Error fetching directions:", error);
    });
}

// Example usage
const origin = "San Francisco, CA";
const destination = "Mountain View, CA";
calculateDistanceAndRoute(origin, destination);
