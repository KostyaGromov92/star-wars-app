/* eslint-disable max-len */
// star ships - REDUCER
// =============================================================================

import { handleActions } from 'redux-actions';

// ACTION TYPES
import * as starShipsActionTypes from '../actions/types/starships';

export const initialState = {
  isFetching: false,
  starShipsList: [],
  error: null,
};

const handlerMap = {
  [starShipsActionTypes.GET_STAR_SHIPS_REQUEST]: (state) => ({
    ...state,
    isFetching: true,
  }),

  [starShipsActionTypes.GET_STAR_SHIPS_SUCCESS]: (state, action) => ({
    ...state,
    isFetching: false,
    starShipsList: [...state.starShipsList, action.payload.data],
  }),

  [starShipsActionTypes.GET_STAR_SHIPS_FAILURE]: (state, action) => ({
    ...state,
    isFetching: false,
    error: action.payload,
  }),

  [starShipsActionTypes.CLEAR_STAR_SHIPS_DATA]: (state) => ({
    ...state,
    starShipsList: []
  }),

};

export default handleActions(handlerMap, initialState);
