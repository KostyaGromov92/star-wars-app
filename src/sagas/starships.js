// STAR SHIPS - SAGAS
// =============================================================================

import { call, put, takeEvery } from 'redux-saga/effects';

// TYPES
import * as starShipsActionTypes from '../actions/types/starships';

// ACTIONS
import * as starShipsAction from '../actions/starships';

// SERVICES
import { processRequest } from '../services/Api';

// HELPERS
import { getDigitFromString } from '../services/helpers'

export function* handleGetStarShipsSaga(action) {
  try {
    const { payload } = action;
    
    const starShipsList = yield call(processRequest, `starships/${getDigitFromString(payload)}/`);

    yield put(starShipsAction.getStarShipsSuccess(starShipsList));
  } catch (e) {
    yield put(starShipsAction.getStarShipsFailure(e));
  }
}

export function* watchHandleGetStarShipsSaga() {
  yield takeEvery(starShipsActionTypes.GET_STAR_SHIPS_REQUEST, handleGetStarShipsSaga);
}
