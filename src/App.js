import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { matchdayRequest, teamsRequest } from "./actions";
// Styles
import "skeleton-css/css/normalize.css";
import "skeleton-css/css/skeleton.css";
import "./App.css";

// Components
import Table from "./containers/Table";
import Matches from "./containers/Matches";
import Navbar from "./components/Navbar";

class App extends Component {
  componentDidMount() {
    this.props.matchdayRequest();
    this.props.teamsRequest();
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Table} />
          <Route path="/matches" component={Matches} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      matchdayRequest,
      teamsRequest
    },
    dispatch
  );

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
