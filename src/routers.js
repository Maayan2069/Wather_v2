import React from "react";
import { Route } from "react-router-dom";
import Weather from "./components/Weater";
import routerAuth from "./utils/routerAuth";
import Auth from "./components/Auth";

const Home = () => {
  return (
    <div className="jumbotron">
      <h3>Hi, React-LOGIN-JWT</h3>
    </div>
  );
};

export default (
  <>
    <Route exact path="/" name="Whether Page" element={<Weather />} />
    <Route path="/Home" component={Home} />
    <Route exact path="/Auth" name="Whether Page" element={<Auth />} />
  </>
);
