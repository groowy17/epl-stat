import React, { Component } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "../styles/Team.css";

class Team extends Component {
  render() {
    const name = this.props.name;
    const crestUrl = this.props.crestUrl;
    const teamHome = this.props.teamHome;
    const id = this.props.id;

    return (
      <Link to={`/team/${id}`}>
        <div className="team">
          <div
            className={classNames("team-crest", {
              "team-crest_home": teamHome
            })}
          >
            <img src={crestUrl} className="team-crest__img" alt={name} />
          </div>
          <div
            className={classNames("team-name", { "team-name_home": teamHome })}
          >
            {name}
          </div>
        </div>
      </Link>
    );
  }
}

export default Team;
