import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaHome, FaSearch, FaCartPlus, FaUser } from "react-icons/fa";

function BottomNavigation() {
  return (
    <footer className="bottom-navigation">
      <nav>
        <ul>
          <li>
            <NavLink to="/home" activeClassName="footeractive">
              <FaHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/search" activeClassName="footeractive">
              <FaSearch />
              <span>Search</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName="footeractive">
              <FaCartPlus />
              <span>Cart</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeClassName="footeractive">
              <FaUser />
              <span>Profile</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default BottomNavigation;
