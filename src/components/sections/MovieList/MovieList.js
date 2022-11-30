import './MovieList.css'
import Button from 'components/atoms/Button/Button'


function MovieList(props) {

    return (
        <section className="film-view">
            <ul className="film-items">
                {props.films.map(film => (
                    <li
                        className="film-item"
                        key={film.id}>
                        <p className="film-item-title">{film.title} <span className="film-item-year">({film.year})</span></p>
                        <div className="film-details">
                            <img src={film.poster} alt={`Poster for ${film.title}`} />
                            <Button
                                className="remove-button"
                                handleOnClick={() => props.handleRemove(film.id)}
                                text="X"
                            >
                            </Button>
                            <p className="film-item-description">{film.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default MovieList