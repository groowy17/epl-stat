import { combineReducers } from "redux";
import table from "./table";
import matches from "./matches";
import matchday from "./matchday";

export default combineReducers({
  table,
  matches,
  matchday
});
