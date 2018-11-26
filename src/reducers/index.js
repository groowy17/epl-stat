import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import table from "./table";
import matches from "./matches";
import matchday from "./matchday";
import teamsInfo from "./teamsInfo";

export default history =>
  combineReducers({
    router: connectRouter(history),
    table,
    matches,
    matchday,
    teamsInfo
  });
