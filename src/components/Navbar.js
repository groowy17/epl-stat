import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <Link className="nav-link" to="/">Table</Link>
        <Link className="nav-link" to="/matches">Matches</Link>
      </nav>
    );
  }
}

export default Navbar;
