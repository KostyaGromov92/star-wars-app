/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// COMPONENTS
import Logo from './components/Logo';
import Loader from './components/Loader';
import CharacterList from './components/CharacterList';
import FavoritesList from './components/Favorites';
import Modal from './components/Modal';

// SELECTORS
import {
  getIsFetchingCharactersList, getFilteredCharactersData
} from './selectors/characters';
import {
  getIsFetchingCharacterData,
  getCharacterData
} from './selectors/character';
import { getFilmsList } from './selectors/films';
import { getStarShipsList } from './selectors/starships';

// ACTIONS
import { getCharactersRequest, setFilterBy } from './actions/characters';
import { setCharacterData, getCharacterFLowRequest } from './actions/character';
import { clearFilmsData } from './actions/films';
import { clearStarShipsData } from './actions/starships';

// CONSTANT
import { FILTER_LIST } from './constants/filterList';

// STYLES
import './App.scss';

const App = () => {
  const localList = localStorage.getItem("favoritesList") ? JSON.parse(localStorage["favoritesList"]) : [];

  const filterOptionRef = useRef({});

  const [ favoritesList, setFavoritesList  ] = useState(localList);
  const [ isOpenModal, setIsOpenModal  ] = useState(false);
  const [ currentDragElement, setCurrentDragElement  ] = useState(null);

  const dispatch = useDispatch();

  const isFetchingCharacters = useSelector((state) => getIsFetchingCharactersList(state));
  const isFetchingCharacterData = useSelector((state) => getIsFetchingCharacterData(state));
  const charsetList = useSelector((state) => getFilteredCharactersData(state));
  const characterFilms = useSelector(state => getFilmsList(state));
  const characterStarShips = useSelector(state => getStarShipsList(state));
  const characterData = useSelector(state => getCharacterData(state));

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => dispatch(getCharactersRequest());

    if (!didCancel) fetchData();

    return () => {
      didCancel = true;
      dispatch(setFilterBy([]));
    };
  }, []);
  
  useEffect(() => {
    localStorage["favoritesList"] = JSON.stringify(favoritesList);
    
  }, [favoritesList]);


  const dragOver = (ev) => {
    ev.preventDefault();
  }
  
  const drag = (ev) => {
    ev.target.classList.add('drag');
    
    const currentCharacter = charsetList.find(element => ev.currentTarget.dataset.name === element.name);

    if (currentCharacter) setCurrentDragElement(currentCharacter);
  }

  const dragEnd = (ev) => {
    ev.target.classList.remove('drag');
  }

  const dragEnter = (ev) => {
    ev.target.classList.add('dashed');
  }

  const dragLeave = (ev) => {
    ev.target.classList.remove('dashed');
  }
  
  const drop = (ev) => {
    ev.preventDefault();
    ev.target.classList.remove('dashed');
    
    const inList = currentDragElement && currentDragElement.name && 
      favoritesList.find(element => element.name === currentDragElement.name);

    if(inList) return false;
    
    setFavoritesList([...favoritesList, currentDragElement]);
  }

  const handleRemoveFromList = (characterName) => {
    const listAfterRemove = favoritesList.filter(character => character.name !== characterName);

    setFavoritesList(listAfterRemove);
  }

  const handleClickFilter = (event) => {
    const keys = Object.keys(filterOptionRef.current).filter(data => filterOptionRef.current[data].checked);

    dispatch(setFilterBy(keys));
  }

  const handleCharacterClick = (name) => {
    const characterData = charsetList.find(character => character.name === name);

    setIsOpenModal(true);
 
    dispatch(setCharacterData(characterData));
    dispatch(getCharacterFLowRequest());
  }

  const handleCloseModal = () => {
    setIsOpenModal(false);

    dispatch(setCharacterData(null));
    dispatch(clearFilmsData());
    dispatch(clearStarShipsData());
  }

  return (
    <>
    <div className="container">
      
        <div className="logo-block">
          <Logo />
          <div className="filter">
            {FILTER_LIST.map(filter => (
              <div className="filter__block" key={filter.id}>
                <input
                  data-filter={filter.id}
                  onClick={handleClickFilter}
                  type='checkbox'
                  ref={ref => filterOptionRef.current[filter.id] = ref}
                  id={filter.id}
                  name={filter.id}
                />
                <label htmlFor={filter.id}>{filter.label}</label>
              </div>
            ))}
          </div>
          <h3>Please put here your favorite characters</h3>
          <p className="description">You can move only that characters which are not in the favorites list</p>
          <div
            className="drop-block"
            onDragLeave={dragLeave}
            onDragEnter={dragEnter}
            onDrop={drop}
            onDragOver={dragOver}
          />
          <FavoritesList removeFromList={handleRemoveFromList} favoritesList={favoritesList} />
        </div>
        <section className="characters">
          {isFetchingCharacters && charsetList.length === 0 &&
            <Loader />
          }
          {!isFetchingCharacters && charsetList.length === 0 &&
            <h2>No Results</h2>
          }
          {charsetList.length > 0 &&
            <CharacterList
              handleClick={handleCharacterClick}
              dragEnd={dragEnd}
              drag={drag}
              items={charsetList}
            />
          }
        </section>
        
    </div>
    {isOpenModal && (
      <Modal
        isFetching={isFetchingCharacterData}
        handleCloseModal={handleCloseModal}
        characterFilms={characterFilms}
        characterStarShips={characterStarShips}
        characterData={characterData}
      />
    )}
    </>
  );
}

export default App;
