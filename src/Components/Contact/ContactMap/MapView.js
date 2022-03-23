import React from 'react';
import { Center } from '@chakra-ui/react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { popupContent, popupHead, popupText } from './PopUpStyles';
delete L.Icon.Default.prototype._getIconUrl;

const MapView = () => {
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
  });

  const position = [4.6686613, -74.0620995];

  return (
    <Center mt={10}>
      <MapContainer center={position} zoom={10} style={{ width: '20rem', height: '20rem' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} >
          <Popup className='request-popup'>
            <div style={popupContent}>
              <img
                src='https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/149_check_ok-512.png'
                width='25'
                height='25' alt='Icon PopUp' />
              <div className='m-2' style={popupHead}>
                Somos Más
              </div>
              <span style={popupText}>
                Dirección: Cra. 22 / 80-73, Bogotá, Colombia.
                Teléfono: 1160112988
              </span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </Center >
  );
};

export default MapView;
