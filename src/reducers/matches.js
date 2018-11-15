import { FETCH_MATCH_SUCCESS, FETCH_MATCH_ERROR } from "../actions";

const initialState = {
  matches: [],
  error: null
};

const matches = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MATCH_SUCCESS:
      return {
        matches: action.matches,
        error: null
      };
    case FETCH_MATCH_ERROR:
      return {
        matches: [],
        error: action.message
      };
    default:
      return state;
  }
};

export default matches;
