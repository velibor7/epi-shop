import React, { useState, Fragment } from "react";
// import { Link } from "react-router-dom";

import Links from "./Links";
import Header from "./Header";
import Drawer from "./Drawer";
import Backdrop from "../UIElements/Backdrop";

import "./MainNavigation.css";

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawerHandler = () => setDrawerIsOpen(true);
  const closeDrawerHandler = () => setDrawerIsOpen(false);

  return (
    <Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <Drawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="drawer__nav-links">
          <Links></Links>
        </nav>
      </Drawer>

      <Header className="main-navigation__header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          fill="white"
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
        </svg>
        <nav className="main-navigation__header-nav">
          <Links></Links>
        </nav>
      </Header>
    </Fragment>
  );
};

export default MainNavigation;
