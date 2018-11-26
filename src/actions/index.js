export const FETCH_TABLE_REQUEST = "FETCH_TABLE_REQUEST";
export const FETCH_TABLE_SUCCESS = "FETCH_TABLE_SUCCESS";
export const FETCH_TABLE_ERROR = "FETCH_TABLE_ERROR";

export const SET_MATCHDAY = "SET_MATCHDAY";
export const MATCHDAY_REQUEST = "MATCHDAY_REQUEST";

export const FETCH_MATCH_REQUEST = "FETCH_MATCH_REQUEST";
export const FETCH_MATCH_SUCCESS = "FETCH_MATCH_SUCCESS";
export const FETCH_MATCH_ERROR = "FETCH_MATCH_ERROR";

export const TEAMS_REQUEST = "TEAMS_REQUEST";
export const FETCH_TEAMS_INFO = "FETCH_TEAMS_INFO";

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

export const matchdayRequest = () => ({
  type: MATCHDAY_REQUEST
});

export const fetchMatchesRequest = () => ({
  type: FETCH_MATCH_REQUEST,
});

export const fetchMatchesSuccess = (matches) => ({
  type: FETCH_MATCH_SUCCESS,
  matches
});

export const fetchMatchesError = (message) => ({
  type: FETCH_MATCH_ERROR,
  message
});

export const teamsRequest = () => ({
  type: TEAMS_REQUEST
});

export const fetchTeamsInfo = (teamsInfo) => ({
  type: FETCH_TEAMS_INFO,
  teamsInfo
});