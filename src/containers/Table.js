import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { fetchTableRequest } from "../actions";
import { teamName } from "../utils";
import Team from "../components/Team";

class Table extends Component {
  componentDidMount() {
    this.props.fetchTableRequest();
  }
  render() {
    const { table, error } = this.props;

    return (
      <table className="u-full-width">
        <thead>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>Points</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Draw</th>
          </tr>
        </thead>
        <tbody>
          {table.map((row, index) => (
            <tr key={index}>
              <td>{row.position}</td>
              <td>
                <Team
                  id={row.team.id}
                  name={teamName(row.team.name)}
                  crestUrl={row.team.crestUrl}
                />
              </td>
              <td>{row.points}</td>
              <td>{row.won}</td>
              <td>{row.lost}</td>
              <td>{row.draw}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTableRequest
    },
    dispatch
  );

const mapStateToProps = state => ({
  table: state.table.table,
  error: state.table.error
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Table)
);
