/*npm install @capacitor/geolocation
*/

import React, { useState } from 'react';
import { Geolocation } from '@capacitor/geolocation';

const GeolocationExample: React.FC = () => {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);

  const getCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    setLocation({
      lat: coordinates.coords.latitude,
      lon: coordinates.coords.longitude,
    });
  };

  return (
    <div>
      <button onClick={getCurrentPosition}>Get Location</button>
      {location && (
        <p>
          Latitude: {location.lat}, Longitude: {location.lon}
        </p>
      )}
    </div>
  );
};

export default GeolocationExample;
