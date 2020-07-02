// STAR SHIPS - ACTIONS
// =============================================================================

import { createAction } from 'redux-actions';

import * as actionTypes from './types/starships';

export const getStarShipsRequest = createAction(actionTypes.GET_STAR_SHIPS_REQUEST);
export const getStarShipsSuccess = createAction(actionTypes.GET_STAR_SHIPS_SUCCESS);
export const getStarShipsFailure = createAction(actionTypes.GET_STAR_SHIPS_FAILURE);

export const clearStarShipsData = createAction(actionTypes.CLEAR_STAR_SHIPS_DATA);
