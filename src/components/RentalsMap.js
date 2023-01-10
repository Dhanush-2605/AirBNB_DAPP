import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { useState, useEffect } from "react";
const RentalsMap = ({ locations, google,setHighLight }) => {
  const [center, setCenter] = useState();

  useEffect(() => {
    let arr = Object.keys(locations);
    console.log("arr" + arr);
    let getLat = (key) => locations[key]["lat"];
    let avgLat = arr.reduce((a, c) => a + Number(getLat(c), 0) / arr.length);

    // let arr1=Object.keys(locations);
    // console.log("arr" + arr);
    let getLng = (key) => locations[key]["lng"];
    let avgLng = arr.reduce((a, c) => a + Number(getLng(c), 0) / arr.length);
    setCenter({ lat: avgLat, lng: avgLng });
  }, [locations]);

  return (
    <div>
      {center && (
        <Map
          google={google}
          containerStyle={{
            width: "50vw",
            height: "calc(100vh-135px)",
          }}
          center={center}
          initialCenter={locations[0]}
          zoom={13}
          disableDefaultUI={true}
          
        >
          {locations.map((coords,i)=>{
            <Marker position={coords} onClick={()=>setHighLight(i)} />
          })}
        </Map>
      )}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBXemIsUdZzCGdV99cdomP5NU3HqXf_4xU",
})(RentalsMap);
