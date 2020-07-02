export const getDigitFromString = (string) => +string.replace(/\D/g,'');

export const getFilteredData = {
  gender: (list) => list.filter(data => data.gender === 'male' || data.gender === 'female'),
  films: (list) => {
    const filmsList = [];

    list.map(data => {
      const filmsFilter = [];

      data.films.filter(film => getDigitFromString(film) === 1 && filmsFilter.push(film));

      const includedFilm = data.films.filter(f => filmsFilter.includes(f));

      if(includedFilm.length > 0) {
        filmsList.push(data);
      }

      return data;
    });

    return filmsList;
  }
}

export const convertDataFromResponseToArray = (array) => {

  const dataArray = array.reduce((data, item) => {
    item.data.results.map(itemArray => data.push(itemArray));

    return [...data];
  }, [])
    
  return dataArray;
}