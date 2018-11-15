import {
  FETCH_TABLE_SUCCESS,
  FETCH_TABLE_ERROR
} from "../actions";

const initialState = {
  table: [],
  error: null
};

const table = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TABLE_SUCCESS:
      return {
        table: action.table,
        error: null
      };
    case FETCH_TABLE_ERROR:
      return {
        table: [],
        error: action.message
      };
    default:
      return state;
  }
};

export default table;
