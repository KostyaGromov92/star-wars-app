// FILMS - SAGAS
// =============================================================================

import { call, put, takeEvery } from 'redux-saga/effects';

// TYPES
import * as filmsActionTypes from '../actions/types/films';

// ACTIONS
import * as filmsAction from '../actions/films';

// SERVICES
import { processRequest } from '../services/Api';

// HELPERS
import { getDigitFromString } from '../services/helpers'

export function* handleGetFilmsSaga(action) {
  try {
    const { payload } = action;
    const filmsList = yield call(processRequest, `films/${getDigitFromString(payload)}/`);
    
    yield put(filmsAction.getFilmsSuccess(filmsList));
  } catch (e) {
    yield put(filmsAction.getFilmsFailure(e));
  }
}

export function* watchHandleGetFilmsSaga() {
  yield takeEvery(filmsActionTypes.GET_FILMS_REQUEST, handleGetFilmsSaga);
}
