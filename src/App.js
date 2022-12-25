import React, { Component, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import routes from "./routers";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route route={routes}>{routes}</Route>
          </Routes>
        </Suspense>
      </HashRouter>
    );
  }
}

export default App;
