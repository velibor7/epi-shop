import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./items/pages/Home";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import NewItem from "./items/pages/NewItem";
import UpdateItem from "./items/pages/UpdateItem";
import Me from "./auth/pages/Me";
import Login from "./auth/pages/Login";
import Register from "./auth/pages/Register";
import Cart from "./items/pages/Cart";
import GlobalState from "./shared/context/GlobalState";
// import ItemDetail from "./items/components/ItemDetail";

import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";

import "./App.css";

const App = () => {
  const { token, login, logout, userId } = useAuth();

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          login: login,
          logout: logout,
        }}
      >
        <GlobalState>
          <Router>
            <MainNavigation />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/items/:iid">
                <Home />
              </Route>
              <Route path="/update/:iid">
                <UpdateItem />
              </Route>
              <Route path="/new">
                <NewItem />
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
              <Route path="/me">
                <Me />
              </Route>
              <Redirect to="/" />
            </Switch>
          </Router>
        </GlobalState>
      </AuthContext.Provider>
    </>
  );
};

export default App;
