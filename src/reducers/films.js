/* eslint-disable max-len */
// films - REDUCER
// =============================================================================

import { handleActions } from 'redux-actions';

// ACTION TYPES
import * as filmsActionTypes from '../actions/types/films';

export const initialState = {
  isFetching: false,
  filmsList: [],
  error: null,
};

const handlerMap = {
  [filmsActionTypes.GET_FILMS_REQUEST]: (state) => ({
    ...state,
    isFetching: true,
  }),

  [filmsActionTypes.GET_FILMS_SUCCESS]: (state, action) => ({
    ...state,
    isFetching: false,
    filmsList: [...state.filmsList, action.payload.data],
  }),

  [filmsActionTypes.GET_FILMS_FAILURE]: (state, action) => ({
    ...state,
    isFetching: false,
    error: action.payload,
  }),

  [filmsActionTypes.CLEAR_FILMS_DATA]: (state, action) => ({
    ...state,
    filmsList: []
  }),

};

export default handleActions(handlerMap, initialState);
