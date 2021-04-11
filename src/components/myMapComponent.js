import React, { useEffect, useState } from 'react';
import {MapContainer, TileLayer, Marker, Popup }  from 'react-leaflet';

  
  function MyMapComponent(props) {
    let [po1, sp1] = useState(props.p1);
    let [po2, sp2] = useState(props.p2);
    const position = [po1, po2];
    
    useEffect(()=>{
      sp1(props.p1);
      sp2(props.p2);
    },[props.p1, props.p2])
return(
  <MapContainer className="leafletsize" center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
)

  }
  

  export default MyMapComponent;