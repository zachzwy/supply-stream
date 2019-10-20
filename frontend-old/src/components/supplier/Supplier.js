import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import MyContext from "../context";
import Nav from "../Nav";

const Supplier = () => {
  return (
    <>
      <Nav links={["HI, SUPPLIER", "LOGOUT"]} />
      <div className="supplier">
        CLICK A SHIPMENT FOR MORE INFORMATION:
        <div>
          <Link className="link" to="/tracker">
            Shipment A
          </Link>
        </div>
        <div>
          <Link className="link" to="/tracker">
            Shipment B
          </Link>
        </div>
        <div>
          <Link className="link" to="/tracker">
            Shipment C
          </Link>
        </div>
        <div>
          <Link className="link" to="/tracker">
            Shipment D
          </Link>
        </div>
      </div>
    </>
  );
};

export default Supplier;
