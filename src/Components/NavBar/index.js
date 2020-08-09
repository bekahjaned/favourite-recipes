import React from "react";
import { Link } from "react-router-dom";

import { NavLink } from "../../Elements/NavLink/";

class NavBar extends React.Component {
  render() {
    return (
      <ul>
        <Link to="/">
          <NavLink>All</NavLink>
        </Link>
        <Link to="/cooking">
          <NavLink>Cooking</NavLink>
        </Link>
        <Link to="/baking">
          <NavLink>Baking</NavLink>
        </Link>
      </ul>
    );
  }
}

export default NavBar;
