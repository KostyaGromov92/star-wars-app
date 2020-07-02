import React from 'react';
import PropTypes from 'prop-types';

const Character = props => (
  <li className="characters__item"
    data-name={props.item.name}
    draggable={true}
    onDragStart={event => props.drag(event)}
    onDragEnd={event => props.dragEnd(event)}
    onClick={() => props.handleClick(props.item.name)}
  >
    <h3 className="characters__title">{props.item.name}</h3>
  
    <ul className="characters__info">
      <li>Gender <span>{props.item.gender}</span></li>
      <li>Height <span>{props.item.height}cm</span> </li>
      <li>Weight <span>{props.item.mass}kg</span> </li>
    </ul>
  </li>
);

Character.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gender: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    type: PropTypes.string,
  }),
  drag: PropTypes.func,
  dragEnd: PropTypes.func,
  handleClick: PropTypes.func,
};

export default Character;
