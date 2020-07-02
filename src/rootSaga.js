import { fork } from 'redux-saga/effects';

import * as charactersSagas from './sagas/characters';
import * as filmsSagas from './sagas/films';
import * as starshipsSagas from './sagas/starships';

export default function* rootSaga() {
  yield fork(charactersSagas.watchHandleGetCharactersSaga);
  yield fork(charactersSagas.watchGetCharacterFlowSaga);
  yield fork(starshipsSagas.watchHandleGetStarShipsSaga);
  yield fork(filmsSagas.watchHandleGetFilmsSaga);
}
