import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./items/pages/Home";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import NewItem from "./items/pages/NewItem";
import Login from "./auth/pages/Login";
import Register from "./auth/pages/Register";
import Cart from "./items/pages/Cart";
import GlobalState from "./shared/context/GlobalState";

import "./App.css";

const App = () => {
  return (
    <>
      <GlobalState>
        <Router>
          <MainNavigation />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/new">
              <NewItem></NewItem>
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>
      </GlobalState>
    </>
  );
};

export default App;
