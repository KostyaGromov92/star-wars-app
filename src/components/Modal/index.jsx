import PropTypes from 'prop-types';
import React from 'react';

// COMPONENTS
import Loader from '../Loader';

import './modal.scss';

const Modal = (props) => (
  <div className="modal">
      <div className="modal__block">
          <div className="modal__top">
            <h4 className="modal__title">Character info</h4>
            <button onClick={props.handleCloseModal} className="modal__button" type="button">X</button>
          </div>
          {props.isFetching ? 
            <Loader /> : (
            <div className="modal__content">
              <div className="modal__text-block">
                <span className="modal__title-text">Name:</span>
                <span className="modal__text">{props.characterData.name}</span>
              </div>
              <div className="modal__text-block">
                <span className="modal__title-text">Species:</span>
                <span className="modal__text">{props.characterData.gender}</span>
              </div>
              <div className="modal__text-block">
                <span className="modal__title-text">Movies:</span>
                <div className="modal__list">
                  {(props.characterFilms.length === 0 || props.characterFilms === undefined) 
                    && <span className="modal__text">No films</span>
                  }
                  {props.characterFilms.length > 0 && props.characterFilms.map((film, index) => (
                    <span
                      className="modal__text"
                      key={film.title}
                    >
                      {film.title}
                      {index !== props.characterFilms.length - 1 && <span>,</span>}
                    </span>
                  ))}
                </div>
              </div>
              <div className="modal__text-block">
                <span className="modal__title-text">SpacesShip:</span>
                <div className="modal__list">
                  {(props.characterStarShips.length === 0 || props.characterStarShips === undefined) 
                    && <span>No starships</span>}
                  {props.characterStarShips.length > 0 && props.characterStarShips.map((starShip, index) => (
                    <span
                      className="modal__text"
                      key={starShip.name}
                    >
                      {starShip.name}
                      {index !== props.characterStarShips.length - 1 && <span>,</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            )
          }
          
      </div>
  </div>
);

Modal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
  characterData: PropTypes.object.isRequired,
  characterStarShips: PropTypes.array.isRequired,
  characterFilms: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default Modal;
