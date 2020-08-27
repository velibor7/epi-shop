import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Home from "./items/pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <MainNavigation />
        <Home></Home>
      </Router>
    </>
  );
}

export default App;
