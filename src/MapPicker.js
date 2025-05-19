import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function LocationMarker({ onChange, initialPosition }) {
  const [position, setPosition] = useState(initialPosition);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      if (onChange) onChange(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position}></Marker>
  );
}

export default function MapPicker({ onLocationChange, initialPosition = { lat: 51.4700, lng: -0.4543 } }) {
  return (
    <div>
      <MapContainer
        center={[initialPosition.lat, initialPosition.lng]}
        zoom={5}
        style={{ height: "300px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker onChange={onLocationChange} initialPosition={initialPosition} />
      </MapContainer>
      <p>Click anywhere on the map to select a location.</p>
    </div>
  );
}
