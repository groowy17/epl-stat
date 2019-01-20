import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { fetchTeamRequest } from "../actions";
import { findCoachInSquad } from "../utils";
import "../styles/TeamBox.css";

class Team extends Component {
  componentDidMount() {
    this.props.fetchTeamRequest(this.props.match.params.id);
  }
  render() {
    const team = this.props.team;
    const coach = findCoachInSquad(team.squad);

    let playersList = [];

    if (team.squad) {
      let players = team.squad.filter(man=>{
        return man.role === 'PLAYER';
      });

      players.map((player, index) => {
        playersList.push(<div key={index}>{player.name}</div>);
      });
    }
    
    // TODO: Сделать компонент игрока
    return (
      <div className="teamBox">
        <div className="teamBox-crest">
          <img
            src={team.crestUrl}
            alt={team.name}
            className="teamBox-crest__img"
          />
        </div>
        <div className="teamBox-info">
          <h4>{team.name}</h4>
          <div className="teamBox-info__venue">{team.venue}</div>
          <div className="teamBox-info__coach">{coach.name}</div>
        </div>
        <div className="teamBox-squad">{playersList}</div>
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
