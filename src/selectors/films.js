/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */

// FILMS - SELECTORS
// =============================================================================

export const getFilmsList = (state) => (state.films  ? state.films.filmsList : []);

