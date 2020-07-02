/* eslint-disable max-len */
// characters - REDUCER
// =============================================================================

import { handleActions } from 'redux-actions';

// ACTION TYPES
import * as charactersActionTypes from '../actions/types/characters';

export const initialState = {
  isFetching: false,
  charactersList: [],
  filterBy: [],
  error: null,
};

const handlerMap = {
  [charactersActionTypes.GET_CHARACTERS_REQUEST]: (state) => ({
    ...state,
    isFetching: true,
  }),

  [charactersActionTypes.GET_CHARACTERS_SUCCESS]: (state, action) => ({
    ...state,
    isFetching: false,
    charactersList: action.payload,
  }),

  [charactersActionTypes.GET_CHARACTERS_FAILURE]: (state, action) => ({
    ...state,
    isFetching: false,
    error: action.payload,
  }),

  [charactersActionTypes.CHARACTERS_LIST_FILTER_BY]: (state, action) => ({
    ...state,
    filterBy: action.payload
  }),

};

export default handleActions(handlerMap, initialState);
