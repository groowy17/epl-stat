import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import table from "./table";
import matches from "./matches";
import matchday from "./matchday";
import teamsInfo from "./teamsInfo";
import team from "./team";

export default history =>
  combineReducers({
    router: connectRouter(history),
    table,
    matches,
    matchday,
    teamsInfo,
    team
  });
