"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const destinations = [
  { name: "New York", code: "US", coords: [40.7128, -74.006] },
  { name: "London", code: "UK", coords: [51.5074, -0.1278] },
  { name: "Berlin", code: "DE", coords: [52.52, 13.405] },
  { name: "Beijing", code: "CN", coords: [39.9042, 116.4074] },
  { name: "Sydney", code: "AU", coords: [-33.8688, 151.2093] },
  { name: "Cape Town", code: "ZA", coords: [-33.9249, 18.4241] },
  { name: "Rio de Janeiro", code: "BR", coords: [-22.9068, -43.1729] },
  { name: "Dubai", code: "UAE", coords: [25.2048, 55.2708] },
];

const customIcon = L.divIcon({
  className: "custom-icon",
  html: `<div class="w-4 h-4 bg-[#0E4F55] rounded-full border-2 border-white shadow-lg"></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

export default function WorldMap() {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      scrollWheelZoom={false}
      zoomControl={false}
      className="w-full h-full outline-none"
      style={{ background: "#f8fafc" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" />
      {destinations.map((dest) => (
        <Marker
          key={dest.code}
          position={dest.coords as [number, number]}
          icon={customIcon}
        >
          <Popup closeButton={false} className="font-sans text-sm font-bold">
            {dest.name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
