/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */

// CHARACTER - SELECTORS
// =============================================================================
import { createSelector } from 'reselect';


export const getCharacterData = (state) => (state.character  ? state.character.characterData : null);

export const getCharacterFilmsApiUrl = createSelector(
    getCharacterData,
    (character) => character ? character.films : []
  );

export const getCharacterStarShipsApiUrl = createSelector(
    getCharacterData,
    (character) => character ? character.starships : []
  );

export const getIsFetchingCharacterData = (state) => (state.character ? state.character.isFetching : false);