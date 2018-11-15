export const FETCH_TABLE_REQUEST = "FETCH_TABLE_REQUEST";
export const FETCH_TABLE_SUCCESS = "FETCH_TABLE_SUCCESS";
export const FETCH_TABLE_ERROR = "FETCH_TABLE_ERROR";

export const SET_MATCHDAY = "SET_MATCHDAY";

export const FETCH_MATCH_REQUEST = "FETCH_MATCH_REQUEST";
export const FETCH_MATCH_SUCCESS = "FETCH_MATCH_SUCCESS";
export const FETCH_MATCH_ERROR = "FETCH_MATCH_ERROR";

export const fetchTableRequest = () => ({
  type: FETCH_TABLE_REQUEST,
});

export const fetchTableSuccess = (table) => ({
  type: FETCH_TABLE_SUCCESS,
  table
});

export const fetchTableError = (message) => ({
  type: FETCH_TABLE_ERROR,
  message
});

export const setMatchday = (matchday) => ({
  type: SET_MATCHDAY,
  matchday
});

export const fetchMatchesRequest = (matchday) => ({
  type: FETCH_MATCH_REQUEST,
  matchday
});

export const fetchMatchesSuccess = (matches) => ({
  type: FETCH_MATCH_SUCCESS,
  matches
});

export const fetchMatchesError = (message) => ({
  type: FETCH_MATCH_ERROR,
  message
});