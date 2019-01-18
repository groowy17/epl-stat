import { FETCH_TEAM_SUCCESS, FETCH_TEAM_ERROR } from "../actions";

const initialState = {
  team: {},
  error: null
};

const team = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEAM_SUCCESS:
      return {
        team: action.team,
        error: null
      };
    case FETCH_TEAM_ERROR:
      return {
        team: {},
        error: action.message
      };
    default:
      return state;
  }
};

export default team;
