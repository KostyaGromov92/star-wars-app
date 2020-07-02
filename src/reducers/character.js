/* eslint-disable max-len */
// character - REDUCER
// =============================================================================

import { handleActions, combineActions } from 'redux-actions';

// ACTION TYPES
import * as characterActionTypes from '../actions/types/character';

export const initialState = {
  characterData: null,
  isFetching: false,
};

const handlerMap = {
  [characterActionTypes.GET_CHARACTER_FLOW_REQUEST]: (state) => ({
    ...state,
    isFetching: true,
  }),

  [combineActions(
    characterActionTypes.GET_CHARACTER_FLOW_SUCCESS,
    characterActionTypes.GET_CHARACTER_FLOW_FAILURE,
  )]: (state) => ({
    ...state,
    isFetching: false,
  }),

  [characterActionTypes.SET_CHARACTER_CHARACTER_DATA]: (state, action) => ({
    ...state,
    characterData: action.payload,
  }),
};

export default handleActions(handlerMap, initialState);


