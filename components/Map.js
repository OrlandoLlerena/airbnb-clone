import ReactMapGL from "react-map-gl";
import Image from "next/image";

function Map() {
  const viewport = {};

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/orlandollerena/ckw5dv9io28q814nsh12qe77p"
      mapboxApiAccessToken={process.env.mapbox_key}
    ></ReactMapGL>
  );
}

export default Map;
