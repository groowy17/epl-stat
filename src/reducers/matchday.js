import { SET_MATCHDAY } from "../actions";

const initialState = 0;

const matchday = (state = initialState, action) => {
  switch (action.type) {
    case SET_MATCHDAY:
      return action.matchday;
    default:
      return state;
  }
};

export default matchday;
