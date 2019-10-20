import React, { useState, useEffect, useContext } from "react";
// import MyContext from "../context";
import Map from "../map/Map";
import GraphContainer from "./GraphContainer";
import Nav from "../Nav";

const Tracker = () => {
  return (
    <div className="tracker">
      <Nav links={["HI, MANUFACTURER", "LOGOUT"]} />
      <Map />
      <GraphContainer />
    </div>
  );
};

export default Tracker;
