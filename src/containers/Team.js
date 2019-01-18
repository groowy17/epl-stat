import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { fetchTeamRequest } from "../actions";

class Team extends Component {
  componentDidMount() {
    this.props.fetchTeamRequest(this.props.match.params.id);
  }
  render() {
    const id = this.props.match.params.id;

    return (
      <div>
        <h4>Team Page {id}</h4>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTeamRequest
    },
    dispatch
  );

const mapStateToProps = state => ({
  team: state.team.team,
  error: state.matches.error
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Team)
);
