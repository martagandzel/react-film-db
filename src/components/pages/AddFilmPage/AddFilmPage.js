import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'

import SubPageTemplate from "components/templates/SubPageTemplate/SubPageTemplate";
import AddMovieForm from "components/sections/AddMovieForm/AddMovieForm";
import { uploadFilms, addNewFilm } from 'utils/http'

const AddFilmPage = () => {

    const [films, setFilms] = useState([]);
    const [titleInput, setTitleInput] = useState('')
    const [yearInput, setYearInput] = useState('')
    const [posterInput, setPosterInput] = useState('')
    const [descriptionInput, setDescriptionInput] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        uploadFilms()
            .then(data => setFilms(data))
            .catch(err => console.log(err))
    }, [])

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
        addNewFilm(newFilm)

        navigate('/')

        setTitleInput('')
        setYearInput('')
        setPosterInput('')
        setDescriptionInput('')
    }

    return (
        <SubPageTemplate>
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
        </SubPageTemplate>
    );
}

export default AddFilmPage;