import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Authentication/Login/Login";
import Signup from "./components/Authentication/Signup/Signup";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
