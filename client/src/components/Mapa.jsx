import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 42.5,
  lng: 19.3
};

const stations = [
  { name: "Bus Station 1", lat: 42.4413, lng: 19.2636 },
  { name: "Bus Station 2", lat: 42.4261, lng: 19.2459 },
  // Dodajte još autobusnih stanica ovde
];

const Mapa = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyByhANtjCtr6kXzO0gSJKVW1oR2qzR46Nw', // Zamenite sa vašim API ključem
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={8}
    >
      {stations.map((station, index) => (
        <Marker
          key={index}
          position={{ lat: station.lat, lng: station.lng }}
          title={station.name}
        />
      ))}
    </GoogleMap>
  );
}

export default Mapa;
