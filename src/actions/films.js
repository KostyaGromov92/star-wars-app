// FILMS - ACTIONS
// =============================================================================

import { createAction } from 'redux-actions';

import * as actionTypes from './types/films';

export const getFilmsRequest = createAction(actionTypes.GET_FILMS_REQUEST);
export const getFilmsSuccess = createAction(actionTypes.GET_FILMS_SUCCESS);
export const getFilmsFailure = createAction(actionTypes.GET_FILMS_FAILURE);

export const clearFilmsData = createAction(actionTypes.CLEAR_FILMS_DATA);
