// CHARACTERS - SAGAS
// =============================================================================

import { call, put, takeEvery, select, all, take, cancelled, takeLatest, cancel } from 'redux-saga/effects';

// TYPES
import * as charactersActionTypes from '../actions/types/characters';
import * as filmsActionTypes from '../actions/types/films';
import * as starshipsActionTypes from '../actions/types/starships';
import * as characterActionTypes from '../actions/types/character';

// SELECTORS
import { getCharacterFilmsApiUrl, getCharacterStarShipsApiUrl } from '../selectors/character';

// ACTIONS
import * as charactersAction from '../actions/characters';
import * as starshipsAction from '../actions/starships';
import * as filmsAction from '../actions/films';
import * as characterAction from '../actions/character';

// CONSTANT
import { LIST_URL } from '../constants/api';

// SERVICES
import { processRequest } from '../services/Api';
import { convertDataFromResponseToArray } from '../services/helpers';

export function* getCharacterFlowSaga() {
  try {
    const characterFilms = yield select(getCharacterFilmsApiUrl);
    const characterStarShips = yield select(getCharacterStarShipsApiUrl);

    yield all(characterFilms.map((film) => put(filmsAction.getFilmsRequest(film))));
    let iterationDisplayFilms = 0;
    
    while (iterationDisplayFilms < characterFilms.length) {
      yield take(filmsActionTypes.GET_FILMS_SUCCESS);
      iterationDisplayFilms += 1;
    }
   
    yield all(characterStarShips.map((statShip) => put(starshipsAction.getStarShipsRequest(statShip))));
    let iterationDisplayStarShips = 0;
    
    while (iterationDisplayStarShips < characterStarShips.length) {
      yield take(starshipsActionTypes.GET_STAR_SHIPS_SUCCESS);
      iterationDisplayStarShips += 1;
    }
  } finally {
    if (yield cancelled()) {
      yield put(characterAction.getCharacterFLowFailure());
    } else {
      yield put(characterAction.getCharacterFLowSuccess());
    }
  }
}

export function* handleGetCharactersSaga() {
  try {
    const charactersList = yield all(LIST_URL.map((url) => call(processRequest, `people/${url}`)));
    const charactersListConverted = convertDataFromResponseToArray(charactersList);
    
    yield put(charactersAction.getCharactersSuccess(charactersListConverted));
  } catch (e) {
    yield put(charactersAction.getCharactersFailure(e));
  }
}

export function* watchGetCharacterFlowSaga() {
  while (true) {
    const task = yield takeLatest(characterActionTypes.GET_CHARACTER_FLOW_REQUEST, getCharacterFlowSaga);

    yield take([
      filmsActionTypes.GET_FILMS_FAILURE,
      starshipsActionTypes.GET_STAR_SHIPS_FAILURE,
    ]);
    yield cancel(task);
  }
}

export function* watchHandleGetCharactersSaga() {
  yield takeEvery(charactersActionTypes.GET_CHARACTERS_REQUEST, handleGetCharactersSaga);
}
