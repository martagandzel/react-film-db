import { useState, useEffect } from 'react';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import MovieList from 'components/sections/MovieList/MovieList';

import { uploadFilms, deleteFilm } from 'utils/http'

function HomePage() {

  const [films, setFilms] = useState([]);

  useEffect(() => {
    uploadFilms()
      .then(data => setFilms(data))
      .catch(err => console.log(err))
  }, [])

  const handleRemove = id => {
    const filmsLeft = films.filter(film => film.id !== id)
    setFilms(filmsLeft)
    deleteFilm(id)
  }


  return (
    <MainTemplate className='mainHeader'>
      <MovieList
        films={films}
        handleRemove={handleRemove}
      />

    </MainTemplate>
  );
}

export default HomePage;
