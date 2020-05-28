const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")

url = "http://localhost:3000/films"

document.addEventListener('DOMContentLoaded', (events) => {
    fetch(url)
    .then(res => res.json())
    .then(films => {
        const filmList = document.getElementsByClassName('card')
        films.forEach(f => insertFilm(f, filmList))
        filmList.addEventListener('change', event => {
            const showingDiv = document.querySelector('#showing')
            displayFilm(event.target.value, showingDiv)
        })
    })
})

function displayFilm(filmId, div) {
    fetch(`${url}/${filmId}`)
    .then(res => res.json())
    .then(film => {
        div.querySelector('#title').textContent = film.title
        div.querySelector('#runtime').textContent = film.runtime
        // div.querySelector
        // div.querySelector
    })
}