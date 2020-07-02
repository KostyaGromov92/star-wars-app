/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */

// CHARACTERS - SELECTORS
// =============================================================================
import { createSelector } from 'reselect';

import { getFilteredData } from '../services/helpers';


export const getCharactersData = (state) => (state.characters  ? state.characters.charactersList : []);
export const getFilterBy = (state) => (state.characters  ? state.characters.filterBy : []);

export const getFilteredCharactersData = createSelector(
    getCharactersData,
    getFilterBy,
    (list, keys) => {
        let newList = [...list];

        keys.forEach(key => {
          newList = getFilteredData[key](newList)
        });

        return newList;
    },
  );

export const getIsFetchingCharactersList = (state) => (state.characters ? state.characters.isFetching : false);

