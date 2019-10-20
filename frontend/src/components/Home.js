import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import MyContext from "../context";

const Home = () => {
  return (
    <div className="home">
      <Link className="link" to="/login-manufacturer">
        Manufacturer Register/Login
      </Link>
      <Link className="link" to="/login-supplier">
        Supplier Register/Login
      </Link>
    </div>
  );
};

export default Home;
