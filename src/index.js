// const url = "http://localhost:3000/films"
// const filmsDiv = () => document.querySelector("#films")
// const posterDiv = () => document.querySelector("#poster")
// const showingDiv = () => document.querySelector("#showing")

url = "http://localhost:3000/films"

document.addEventListener('DOMContentLoaded', (events) => {
    fetch(url)
    .then(res => res.json())
    .then(films => getFilms(films) ({ 
        //NOT SHOWING UP! WHYYYYYY???
        // const filmList = document.querySelector('#showing')
        // films.forEach(f => insertFilm(f, filmList))
        // filmList.addEventListener('change', event => {
        //     const showingDiv = document.querySelector('#showing')
        //     displayFilm(event.target.value, showingDiv)
        // })
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
    //NOT ATTACHING!!!!! =/ 
    function insertFilm(film, filmList) {
        const li = document.createElement('li')
        li.innerText = film.title
        li.setAttribute('value', film.id)
        filmList.appendChild(li)
    }
}