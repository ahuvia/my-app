import React, { useEffect, useState } from "react";
import { Marker, MapContainer, Popup, TileLayer, useMapEvents, useMap } from "react-leaflet";

const Map = () => {
  const [lat, setLat] = useState(32.168143114188624);
  const [lon, setlon] = useState(35.23642820541842);
  const [pos, setPos] = useState({lat:lat,lon:lon});
  useEffect(() => {
    getLocation();
  }, []);

 
  const getLocation = () => {
    return navigator.geolocation.watchPosition((res)=>{
        console.log(res)      
        setLat(res.coords.longitude)
        setlon(res.coords.longitude)
        setPos({lat:res.coords.latitude,lon: res.coords.longitude})
        // alert('lon:'+res.coords.longitude + ' lat:'+res.coords.latitude)
    }, (err)=>{
        console.log(err)
         alert(err.message)
    }, {
      enableHighAccuracy: true,
      maximumAge: 10000,
      timeout: 10000,
    });
  };

  return (
    <div>
      <div style={{position:"10000", textAlign:"center"}}>
        lat:{lat} lon:{lon}
        </div>
      <MapContainer
        style={{ height: "85vh", width: "100wh" }}
        center={pos}
        zoom={9}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={pos} >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {/* <LocationMarker /> */}
      </MapContainer>
    </div>
  );
};

export default Map;

function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
          click() {
            map.locate()
          },
          locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
          },
        })


        return position === null ? null : (
          <Marker position={position}>
            <Popup>You are here</Popup>
          </Marker>
        )
      }