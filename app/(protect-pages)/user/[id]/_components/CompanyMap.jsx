'use client';

import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

export default function CompanyMap({ contact }) {
  const position = [contact.address.geo.lat, contact.address.geo.lng];

  return (
    <MapContainer center={position} zoom={13} style={{ minHeight: '480px', height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>
          <b>{contact.company?.name}</b> <br /> {contact.address?.street} {contact.address?.suite} <br />
          {contact.address?.zipcode} {contact.address?.city}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
