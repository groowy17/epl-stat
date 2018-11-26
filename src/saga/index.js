import { takeEvery, select, all, call, put, fork } from "redux-saga/effects";
import { delay } from "redux-saga";
import API from "../api";
import {
  FETCH_TABLE_REQUEST,
  FETCH_MATCH_REQUEST,
  MATCHDAY_REQUEST,
  TEAMS_REQUEST
} from "../actions";
import {
  fetchTableSuccess,
  fetchTableError,
  fetchMatchesError,
  setMatchday,
  fetchMatchesSuccess,
  fetchTeamsInfo
} from "../actions";

const selectorMatchday = state => state.matchday;

export function* fetchTable() {
  const url = "/competitions/PL/standings?standingType=TOTAL";

  try {
    const response = yield call(API.get, url);
    const table = [...response.data.standings[0].table];

    yield put(fetchTableSuccess(table));
  } catch (error) {
    const message = error.message;

    yield put(fetchTableError(message));
  }
}

export function* fetchMatches() {
  try {
    // Для того чтобы успел выполнится экшн с днем матча
    yield call(delay, 500);
    const md = yield select(selectorMatchday);
    const url = `/competitions/PL/matches?matchday=${md}`;
    const response = yield call(API.get, url);
    const matches = response.data.matches;

    yield put(fetchMatchesSuccess(matches));
  } catch (error) {
    const message = error.message;

    yield put(fetchMatchesError(message));
  }
}

export function* reqMatchday() {
  const url = "/competitions/PL/";

  try {
    const response = yield call(API.get, url);
    const matchday = response.data.currentSeason.currentMatchday;

    yield put(setMatchday(matchday));
  } catch (error) {
    console.log(error.message);
  }
}

export function* reqTeamsInfo() {
  const url = "/competitions/PL/teams";

  try {
    const response = yield call(API.get, url);
    const teams = response.data.teams;
    const teamsInfo = [];

    teams.map(team => {
      teamsInfo.push({
        id: team.id,
        crestUrl: team.crestUrl
      });
    });

    yield put(fetchTeamsInfo(teamsInfo));
  } catch (error) {
    console.log(error.message);
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(MATCHDAY_REQUEST, reqMatchday),
    takeEvery(TEAMS_REQUEST, reqTeamsInfo),
    takeEvery(FETCH_TABLE_REQUEST, fetchTable),
    takeEvery(FETCH_MATCH_REQUEST, fetchMatches)
  ]);
}
