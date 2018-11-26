import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { fetchMatchesRequest } from "../actions";

// Component
import Match from "../components/Match";

class Matches extends Component {
  componentDidMount() {
    this.props.fetchMatchesRequest();
  }

  render() {
    const { matches, error } = this.props;
    return (
      <>
        <h1>Matches</h1>
        {matches.map((match, index) => (
          <Match key={index} match={match} />
        ))}
      </>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMatchesRequest
    },
    dispatch
  );

const mapStateToProps = state => ({
  matches: state.matches.matches,
  error: state.matches.error
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Matches));
