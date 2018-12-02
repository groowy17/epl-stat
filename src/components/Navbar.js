import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="container">
          <div className="nav-wrapper">
            <Link className="nav-link" to="/">Table</Link>
            <Link className="nav-link" to="/matches">Matches</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
