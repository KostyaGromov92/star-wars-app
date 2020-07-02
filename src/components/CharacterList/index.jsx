import React from 'react';
import PropTypes from 'prop-types';

import Character from './Character';

import './characters.scss';

const CharacterList = props => (
  <ul className="characters">
    {props.items.map((item, i) => (
        <Character
            handleClick={props.handleClick}
            dragEnd={props.dragEnd}
            drag={props.drag}
            key={i}
            item={item}
        />
    ))}
  </ul>
);

CharacterList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  drag: PropTypes.func,
  dragEnd: PropTypes.func,
  handleClick: PropTypes.func,
};

export default CharacterList;
