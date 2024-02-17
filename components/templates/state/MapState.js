import React from "react";
import 'leaflet/dist/leaflet.css'
import { MapContainer , TileLayer } from "react-leaflet";

const MapState = () => {
  const position = [51.505, -0.09]

  return (
    <MapContainer className="w-full h-full" center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default MapState;
