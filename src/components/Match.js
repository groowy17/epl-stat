import React, { Component } from "react";

class Match extends Component {
    render() {
        const match = this.props.match;
        // console.log(match);
        return (
            <div className="row">
                <span className="five columns">{match.homeTeam.name}</span>
                <span className="two columns">{match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}</span>
                <span className="five columns">{match.awayTeam.name}</span>
            </div>
        );
    }
}

export default Match;
