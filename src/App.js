import React, { Component } from "react";
// Styles
import "skeleton-css/css/normalize.css";
import "skeleton-css/css/skeleton.css";
import "./App.css";

// Components
import Table from "./containers/Table";
import Matches from "./containers/Matches";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Table />
        <Matches />
      </div>
    );
  }
}

export default App;
