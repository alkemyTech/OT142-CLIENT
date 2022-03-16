import { useState } from 'react';
import { Wrapper } from "@googlemaps/react-wrapper";
import Map from './Map';
import Marker from './Marker';

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

const MapsWrapper = ({setLatLng}) => {

    const [click, setClick] = useState([]);
    const [zoom, setZoom] = useState(10);
    const [center, setCenter] = useState({
        lat: 0,
        lng: 0,
    });
    
    function success(pos) {
        var crd = pos.coords;
        setCenter({
            lat: crd.latitude,
            lng: crd.longitude,
        })
    };
    
    function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    window.navigator.geolocation.getCurrentPosition(success, error, options);

    const onClick = (e) => {
        setLatLng({
            latitude: e.latLng.lat(),
            longitude: e.latLng.lng(),
            address: "",
        })
        setClick([e.latLng]);
    };
    
    const onIdle = (m) => {
        setZoom(m.getZoom());
        setCenter(m.getCenter().toJSON());
    };

    return (
        <Wrapper apiKey={""}>
            <Map
                center={center} 
                zoom={zoom} 
                onClick={onClick} 
                onIdle={onIdle}
                style={{ flexGrow: "1", height: "350px" }}
            >
                {click.map((latLng, i) => (
                    <Marker key={i} position={latLng} />
                ))}
            </Map>
        </Wrapper>
    )
}

export default MapsWrapper