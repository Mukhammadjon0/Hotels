import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { StateContext } from "../../context/Context";
import "./Navbar.css";
function Navbar() {
  const {state}=useContext(StateContext)
  console.log(state)
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
        <sup>({state.reserve.length})</sup>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
