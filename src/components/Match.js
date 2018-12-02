import React, { Component } from "react";
import { teamName } from "../utils";
import "../styles/Match.css";
class Match extends Component {
  render() {
    const match = this.props.match;
    const crestHomeUrl = this.props.crestHome.crestUrl;
    const crestAwayUrl = this.props.crestAway.crestUrl;

    return (
      <div className="row match">
        <div className="five columns match-team">
          <div className="row">
            <div className="ten columns match-team__name match-team__name_home">
              {teamName(match.homeTeam.name)}
            </div>
            <div className="two columns match-team__crest">
              <img src={crestHomeUrl} alt={match.homeTeam.name} />
            </div>
          </div>
        </div>
        <div className="two columns match-score">
          <span className="match-score__result">
            {match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}
          </span>
        </div>
        <div className="five columns match-team">
          <div className="row">
            <div className="two columns match-team__crest">
              <img src={crestAwayUrl} alt={match.awayTeam.name} />
            </div>
            <div className="ten columns match-team__name match-team__name_away">
              {teamName(match.awayTeam.name)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Match;
