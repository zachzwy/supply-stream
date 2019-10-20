import React, { useState, useEffect, useContext, useRef } from "react";
import MapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { TOKEN } from "../../utility";
import MyContext from "../../context";
import PolylineOverlay from "./PolylineOverlay";
import { useUpdateMap, useGeocoding } from "../../customhooks/index";
import minuteToHour from "../../utility/minuteToHour";
// import MyContext from "../context";

const Map = () => {
  const { state } = useContext(MyContext);
  const { userInputs } = state;
  const dataListFrom = useGeocoding(userInputs.from);
  const dataListTo = useGeocoding(userInputs.to);
  const mapRef = useRef();
  // console.log(dataListFrom);
  const {
    viewport,
    handleViewportChange,
    handleUpdateMap,
    location,
    points,
    duration
  } = useUpdateMap(dataListFrom, dataListTo);
  const durationAt = points[[parseInt(points.length / 2, 10)]];
  const durationInHour = minuteToHour(duration);
  console.log(`Location is: `);
  console.log(location);

  return (
    <div className="map">
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/zachzwy/cj1gxz24v001d2so0hxzi16zw"
        onViewportChange={viewport => handleViewportChange(viewport)}
        mapboxApiAccessToken={TOKEN}
      >
        {!location.from ? null : (
          <Marker
            latitude={location.from.latitude}
            longitude={location.from.longitude}
          >
            <div className="pin">&#10514;</div>
          </Marker>
        )}

        {!location.to ? null : (
          <>
            <PolylineOverlay points={points} />
            <Marker
              latitude={location.to.latitude}
              longitude={location.to.longitude}
            >
              <div className="pin">&#10515;</div>
            </Marker>
            <Marker
              latitude={durationAt ? durationAt[1] : 0}
              longitude={durationAt ? durationAt[0] : 0}
            >
              <div className="duration">{`Driving: ${durationInHour}`}</div>
            </Marker>
          </>
        )}
      </MapGL>
    </div>
  );
};

export default Map;
