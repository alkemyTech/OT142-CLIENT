import React from 'react';
import { Center } from '@chakra-ui/react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { popupContent, popupHead, popupText } from './PopUpStyles';

const MapView = () => {
  const position = [-34.47134651587033, -58.55053059883233];

  return (
        <Center mt={10}>
            <MapContainer center={position} zoom={11} style={{ width: '20rem', height: '20rem' }}>
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
                                Dirección: Av. Andrés Rolón 1558, Beccar, Provincia de Buenos Aires.
                                Teléfono: 11 5761-7533
                            </span>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>
        </Center>
  );
};

export default MapView;
