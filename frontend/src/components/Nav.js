import React, { useState, useEffect, useContext } from "react";
import MyContext from "../context";

const Nav = ({ links }) => {
  return (
    <nav className="nav">
      <div className="nav-logo">PROJECT-16</div>
      <div className="nav-link">
        {links.map((link, i) => (
          <a key={i}>{link}</a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
