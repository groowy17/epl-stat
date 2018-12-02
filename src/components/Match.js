import React, { Component } from "react";
import { teamName } from "../utils";
class Match extends Component {
  render() {
    const match = this.props.match;
    const crestHomeUrl = this.props.crestHome.crestUrl;
    const crestAwayUrl = this.props.crestAway.crestUrl;

    return (
      <div className="row">
        <span className="five columns">
          {teamName(match.homeTeam.name)}
        </span>
        <span className="two columns">
          {match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}
        </span>
        <span className="five columns">
          {teamName(match.awayTeam.name)}
        </span>
      </div>
    );
  }
}

export default Match;
