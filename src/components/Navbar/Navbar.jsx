import React from "react";
import {useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const reserved = useSelector((state) => state.reserve.reserve);

  return (
    <nav>
      <NavLink className={'nav-link'} to={"/"}>
        <h1>Navbar</h1>
      </NavLink>
      <div className="links">
        <NavLink className={"nav-link"} to={"/product"}>
          Products
        </NavLink>
        <NavLink className={"nav-link"} to={"/votes"}>
          Votes
        </NavLink>
        <NavLink className={"nav-link"} to={"/reserved"}>
          Reserved 
        <sup>({reserved.length})</sup>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
