import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { teamsRequest } from "./actions";
// Styles
import "skeleton-css/css/normalize.css";
import "skeleton-css/css/skeleton.css";
import "./App.css";

// Components
import Table from "./containers/Table";
import Matches from "./containers/Matches";
import Team from "./containers/Team";
import Navbar from "./components/Navbar";
import NotFound from "./containers/NotFound";

class App extends Component {
  componentWillMount() {
    this.props.teamsRequest();
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container app">
          <Switch>
            <Route exact path="/" component={Table} />
            <Route path="/matches" component={Matches} />
            <Route path="/team/:id" component={Team} />

            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
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
