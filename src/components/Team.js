import React, { Component } from "react";
import classNames from "classnames";
import "../styles/Team.css";

class Team extends Component {
  render() {
    const name = this.props.name;
    const crestUrl = this.props.crestUrl;
    const teamHome = this.props.teamHome;

    return (
      <div className="team">
        <div
          className={classNames("team-crest", { "team-crest_home": teamHome })}
        >
          <img src={crestUrl} className="team-crest__img" alt={name} />
        </div>
        <div
          className={classNames("team-name", { "team-name_home": teamHome })}
        >
          {name}
        </div>
      </div>
    );
  }
}

export default Team;
