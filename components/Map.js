import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { useEffect } from "react";

function Map({ searchResults }) {
  // Transform the search results to usable latitude and longitude object for getCenter
  //  { latitude: 51.503333, longitude: -0.119722 }
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  //  The latitude and longitude of the center of the locations coordinates
  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/orlandollerena/ckw5dv9io28q814nsh12qe77p"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map(({ long, lat }) => (
        <div key={long}>
          <Marker
            longitude={long}
            latitude={lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p className="cursor-pointer">📌</p>
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
