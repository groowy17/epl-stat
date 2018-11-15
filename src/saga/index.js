import { takeEvery, take, all, call, put } from "redux-saga/effects";
import API from "../api";
import {
  FETCH_TABLE_REQUEST,
  FETCH_MATCH_REQUEST,
  SET_MATCHDAY
} from "../actions";
import {
  fetchTableSuccess,
  fetchTableError,
  fetchMatchesError,
  setMatchday,
  fetchMatchesSuccess
} from "../actions";

function* fetchTable() {
  const url = "/competitions/PL/standings?standingType=TOTAL";

  try {
    const response = yield call(API.get, url);
    const table = [...response.data.standings[0].table];

    yield put(fetchTableSuccess(table));

    if (table) {
      const matchday = response.data.season.currentMatchday;

      yield put(setMatchday(matchday));
    }
  } catch (error) {
    const message = error.message;

    yield put(fetchTableError(message));
  }
}

function* fetchMatches() {
  try {
    const md = yield take(SET_MATCHDAY);
    const url = `/competitions/PL/matches?matchday=${md.matchday}`;
    const response = yield call(API.get, url);
    const matches = response.data.matches;

    yield put(fetchMatchesSuccess(matches));
  } catch (error) {
    const message = error.message;
    
    yield put(fetchMatchesError(message));
  }
}

export default function* tableSaga() {
  yield all([
    takeEvery(FETCH_TABLE_REQUEST, fetchTable),
    takeEvery(FETCH_MATCH_REQUEST, fetchMatches)
  ]);
}
