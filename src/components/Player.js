import React, { Component } from "react";

import "../styles/Player.css";

class Player extends Component {
    render() {
        const {playerName, position, shirtNumber} = {...this.props} 
        return (
            <div className="player">
                <div className="player-number">{shirtNumber}</div>
                <div className="player-name">{playerName}</div>
                {/* <div className="player-position">{position}</div> */}
            </div>
        );
    }
}

export default Player;