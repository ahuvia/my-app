import React, { useEffect, useState } from "react";
import { Marker, MapContainer, Popup, TileLayer, useMapEvents } from "react-leaflet";

const Map = () => {
  const [lat, setLat] = useState(32.168143114188624);
  const [lon, setlon] = useState(35.23642820541842);
  const [position, setPosition] = useState(null)
  useEffect(() => {
    getLocation();
  }, []);
 
  const getLocation = () => {
    return navigator.geolocation.watchPosition((res)=>{
        console.log(res)
        setLat(res.coords.longitude)
        setlon(res.coords.longitude)
    }, (err)=>{
        console.log(err)
        // alert(err.message)
    }, {
      enableHighAccuracy: true,
      maximumAge: 10000,
      timeout: 10000,
    });
  };

//   let position = [32.168143114188624, 35.23642820541842];
  return (
    <div>
      <MapContainer
        style={{ height: "100vh", width: "100wh" }}
        center={[lat,lon]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[lat,lon]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        <LocationMarker />
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