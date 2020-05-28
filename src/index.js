const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")

url = "http://localhost:3000/films"

document.addEventListener('DOMContentLoaded', (events) => {
    fetch(url)
    .then(res => res.json())
    .then(films => {
        const filmList = document.querySelector('#films')
        films.forEach(f => insertFilm(f, filmList))
        filmList.addEventListener('change', event => {
            const showingDiv = document.querySelector('#showing')
            displayFilm(event.target.value, showingDiv)
        })
    })
})

document.addEventListener("click", (event) => {
    if (event.target.)

})