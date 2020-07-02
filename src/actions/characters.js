// CHARACTERS - ACTIONS
// =============================================================================

import { createAction } from 'redux-actions';

import * as actionTypes from './types/characters';

export const getCharactersRequest = createAction(actionTypes.GET_CHARACTERS_REQUEST);
export const getCharactersSuccess = createAction(actionTypes.GET_CHARACTERS_SUCCESS);
export const getCharactersFailure = createAction(actionTypes.GET_CHARACTERS_FAILURE);

export const setFilterBy = createAction(actionTypes.CHARACTERS_LIST_FILTER_BY);
