import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

// REDUCERS
import characters from './reducers/characters';
import films from './reducers/films';
import character from './reducers/character';
import starships from './reducers/starships';

export default combineReducers({
  routing,
  starships,
  characters,
  character,
  films
});
