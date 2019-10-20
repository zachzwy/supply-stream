import React, { useState, useEffect, useContext, useRef } from "react";
// import MyContext from "../context";
import Chart from "./Chart";

const GraphContainer = () => {
  return (
    <div className="graph-container">
      <div>
        <Chart title="Temperature" />
      </div>
      <div>
        <Chart title="Vibration" />
      </div>
    </div>
  );
};

export default GraphContainer;
