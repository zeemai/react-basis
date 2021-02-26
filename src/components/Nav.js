import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          <li>Home</li>
        </Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/about">
          <li>About</li>
        </Link>
        {/* <a style={{ color: "white", textDecoration: "none" }} href="/about">
          <li>About</li>
        </a> */}
        <Link style={{ color: "white", textDecoration: "none" }} to="/shop">
          <li>shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
