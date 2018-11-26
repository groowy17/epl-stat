import { FETCH_TEAMS_INFO } from "../actions";

const initialState = [];

const teamsInfo = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEAMS_INFO:
      return action.teamsInfo;
    default:
      return state;
  }
};

export default teamsInfo;
