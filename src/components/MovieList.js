
function MovieList(props) {

    return (
        <section className="film-view">
            <ul className="film-items">
                {props.films.map(film => (
                    <li
                        className="film-item"
                        key={film.id}>
                        <div className="film-details">
                            <img src={film.poster} alt={`Poster for ${film.title}`} />
                            <span className="film-item-description">{film.description}</span></div>
                        <p className="film-item-title">{film.title} <span className="film-item-year">({film.year})</span>
                        </p>

                    </li>
                ))}
            </ul>
        </section>
    )
}

export default MovieList