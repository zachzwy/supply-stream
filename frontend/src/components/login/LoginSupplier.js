import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import MyContext from "../context";
import TextInput from "../form/TextInput";

const LoginSupplier = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-supplier">
      <TextInput
        label="USER NAME:"
        value={userName}
        dataList={[]}
        onChange={e => setUserName(e.target.value)}
        placeholder="Enter user name..."
      />
      <TextInput
        label="PASSWORD:"
        value={[...password].map(c => "*").join("")}
        dataList={[]}
        onChange={e => setPassword(e.target.value)}
        placeholder="Enter password.."
      />
      <Link className="link" to="/supplier">
        Register/Login
      </Link>
    </div>
  );
};

export default LoginSupplier;
