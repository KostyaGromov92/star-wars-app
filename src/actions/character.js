// CHARACTER FLOW - ACTIONS
// =============================================================================

import { createAction } from 'redux-actions';

import * as actionTypes from './types/character';

export const getCharacterFLowRequest = createAction(actionTypes.GET_CHARACTER_FLOW_REQUEST);
export const getCharacterFLowSuccess = createAction(actionTypes.GET_CHARACTER_FLOW_SUCCESS);
export const getCharacterFLowFailure = createAction(actionTypes.GET_CHARACTER_FLOW_FAILURE);

export const setCharacterData = createAction(actionTypes.SET_CHARACTER_CHARACTER_DATA);