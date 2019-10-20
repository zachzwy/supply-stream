import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyContext from "./context";
import reducer from "./reducer";
import Home from "./components/Home";
import Manufacturer from "./components/manufacturer/Manufacturer";
import LoginManufacturer from "./components/login/LoginManufacturer";
import Supplier from "./components/supplier/Supplier";
import Tracker from "./components/tracker/Tracker";
import "./style.scss";
import LoginSupplier from "./components/login/LoginSupplier";

const App = () => {
  const initState = useContext(MyContext);
  const [state, dispatch] = useReducer(reducer, initState);

  console.log(state);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login-manufacturer" exact>
            <LoginManufacturer />
          </Route>
          <Route path="/login-supplier" exact>
            <LoginSupplier />
          </Route>
          <Route path="/manufacturer" exact>
            <Manufacturer />
          </Route>
          <Route path="/supplier" exact>
            <Supplier />
          </Route>
          <Route path="/tracker" exact>
            <Tracker />
          </Route>
        </Switch>
      </Router>
    </MyContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
