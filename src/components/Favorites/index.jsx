import React from 'react';
import PropTypes from 'prop-types';

import './favorites.scss';

const FavoritesList = props => (
  <div
    className="favorites"
  >
    {props.favoritesList.length === 0 &&
      <h5 className="favorites__title">
        Your favorites characters list is empty for now
      </h5>
    }

    {props.favoritesList.length > 0 && (
      <>
      <h3 className="favorites__title">Favorites characters</h3>
      <ul className="favorites__list">
        {props.favoritesList && props.favoritesList.map(favorite => (
          <li
            className="favorites__item"
            key={favorite.name}
          >
              <h4>{favorite.name}</h4>
              <button 
                type="button"
                className="favorites__button"
                onClick={() => props.removeFromList(favorite.name)}
              >
                Remove
              </button>
          </li>
        ))}
      </ul>
      </>
    )}
  </div>
);

FavoritesList.propTypes = {
  removeFromList: PropTypes.func.isRequired,
  favoritesList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default FavoritesList;
