import React, { Component } from "react";
import { teamName } from "../utils";
import "../styles/Match.css";

import Team from "../components/Team";
class Match extends Component {
  render() {
    const match = this.props.match;
    const crestHomeUrl = this.props.crestHome.crestUrl;
    const crestAwayUrl = this.props.crestAway.crestUrl;

    // css grid here!! for fun 😊
    return (
      <>
        <Team
          id={match.homeTeam.id}
          name={teamName(match.homeTeam.name)}
          crestUrl={crestHomeUrl}
          teamHome={true}
        />
        <div className="match-score">
          <span className="match-score__result">
            {match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}
          </span>
        </div>
        <Team
          id={match.awayTeam.id}
          name={teamName(match.awayTeam.name)}
          crestUrl={crestAwayUrl}
        />
      </>
    );
  }
}

export default Match;
