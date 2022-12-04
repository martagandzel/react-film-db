
const URLFilms = 'http://localhost:5000/films'
const URLUsers = 'http://localhost:5000/users'

export const uploadFilms = () => {
    return fetch(URLFilms)
        .then(res => res.json())

}

export const addNewFilm = newFilm => {
    fetch(URLFilms, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFilm)
    })
}

export const deleteFilm = id => {
    fetch(`${URLFilms}/${id}`, {
        method: 'DELETE'
    })
}


export const loginUser = email => {
    return fetch(`${URLUsers}?email=${email}`)
        .then(res => res.json())
}

export const addNewUser = (newUser) => {
    return fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
}