
import React, { Component } from "react";
import { useLocation, NavLink } from "react-router-dom";


import logo from '../../assets/img/logo.svg'

function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")",
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="/"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              {/* <img
                src={logo}
                alt="..."
              /> */}
            </div>
          </a>
          <a className="simple-text" href="/">
            Money Tracker
          </a>
        </div>
      
      </div>
    </div>
  );
}

export default Sidebar;
