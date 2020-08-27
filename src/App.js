import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./items/pages/Home";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import NewItem from "./items/pages/NewItem";

import GlobalState from "./shared/context/GlobalState";

import "./App.css";
import Cart from "./items/pages/Cart";

function App() {
  return (
    <>
      <GlobalState>
        <Router>
          <MainNavigation />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/new" exact>
              <NewItem></NewItem>
            </Route>
            <Route path="/cart" exact>
              <Cart />
            </Route>
          </Switch>
        </Router>
      </GlobalState>
    </>
  );
}

export default App;
