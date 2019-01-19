import React, { Component } from "react";
import "../styles/NotFound.css";
class NotFound extends Component {
  render() {
    const sqNum = 100;
    let sq = [];

    for (let i = 0; i < sqNum; i++) {
        let style = {
            backgroundColor: `#${Math.random().toString(16).substr(-6)}`
        }
        sq.push(<div className="not-found-sq" key={i} style={style}></div>); 
    }

    return (
        <div className="not-found">
            {sq}
        </div>
    );
  }
}

export default NotFound;
