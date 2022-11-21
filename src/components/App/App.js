import './App.css';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage';
import MovieList from '../MovieList/MovieList';
import AddMovieForm from '../AddMovieForm/AddMovieForm';

function App() {

  const [films, setFilms] = useState([]);

  const [titleInput, setTitleInput] = useState('')
  const [yearInput, setYearInput] = useState('')
  const [posterInput, setPosterInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')


  const URL = 'http://localhost:5000/films'

  useEffect(() => {

    fetch(URL)
      .then(res => res.json())
      .then(data => setFilms(data))
      .catch(err => console.log(err))

  }, [])

  const handleRemove = id => {
    const filmsLeft = films.filter(film => film.id !== id)
    setFilms(filmsLeft)

    fetch(`${URL}/${id}`, {
      method: 'DELETE'
    })

  }

  const readTitleInput = event => {
    setTitleInput(event.target.value)
  }
  const readYearInput = event => {
    setYearInput(event.target.value)
  }
  const readPosterInput = event => {
    setPosterInput(event.target.value)
  }
  const readDescriptionInput = event => {
    setDescriptionInput(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    const newFilm = {
      id: uuidv4(),
      title: titleInput,
      year: yearInput,
      poster: posterInput,
      description: descriptionInput
    }

    const updatedFilms = films.concat(newFilm)
    setFilms(updatedFilms)

    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFilm)
    })

    setTitleInput('')
    setYearInput('')
    setPosterInput('')
    setDescriptionInput('')
  }


  return (
    <div className="App">
      <WelcomeMessage />
      <MovieList
        films={films}
        handleRemove={handleRemove}
      />
      <AddMovieForm
        handleSubmit={handleSubmit}
        titleInput={titleInput}
        readTitleInput={readTitleInput}
        yearInput={yearInput}
        readYearInput={readYearInput}
        posterInput={posterInput}
        readPosterInput={readPosterInput}
        descriptionInput={descriptionInput}
        readDescriptionInput={readDescriptionInput}
      />
    </div>
  );
}

export default App;
