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

  filterTeamsCrest(info, id) {
    const team = info.filter(team => team.id === id);

    return team[0];
  }

  render() {
    const { matches, error, matchday } = this.props;
    const info = this.props.teamsInfo;

    return (
      <>
        {matchday !== 0 && <h4>Matchday {matchday}</h4>}
        <div className="matches">
          {matches.map((match, index) => (
            <Match
              key={index}
              match={match}
              crestAway={this.filterTeamsCrest(info, match.awayTeam.id)}
              crestHome={this.filterTeamsCrest(info, match.homeTeam.id)}
            />
          ))}
        </div>
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
  error: state.matches.error,
  teamsInfo: state.teamsInfo,
  matchday: state.matchday
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Matches)
);
