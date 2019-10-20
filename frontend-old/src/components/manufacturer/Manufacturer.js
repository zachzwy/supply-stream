import React, { useState, useEffect, useContext } from "react";
// import MyContext from "../context";
import Map from "../map/Map";
import Form from "../form/Form";
import Nav from "../Nav";

const Manufacturer = () => {
  return (
    <div className="manufacturer">
      <Nav links={["HI, MANUFACTURER", "LOGOUT"]} />
      <Map />
      <Form />
    </div>
  );
};

export default Manufacturer;
