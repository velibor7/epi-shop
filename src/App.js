import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./items/pages/Home";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import NewItem from "./items/pages/NewItem";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <MainNavigation />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/new" exact>
            <NewItem></NewItem>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
