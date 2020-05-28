const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")
const movieCard = document.querySelector('.card')
const movieTitle = document.querySelector('#title')
const moviePoster = document.querySelector('#poster')
const runTime = document.querySelector('#runTime')
const showTime = document.querySelector('#showtime')
const tixLeft = document.querySelector('#ticket-num')
const info = document.querySelector('#film-info')
const buyTix = document.querySelector('.ui.orange.button')
const singleFilm = "http://localhost:3000/films/1"
//patch: /films/[:id]
//get single movie: `http://localhost:3000/films/${id}`

//send fetch to get movie's details
const fetchSingleFilm = () => {
fetch(singleFilm)
.then(resp => resp.json())
.then(renderFilms)
}
//renderFilms
const renderFilms = (film) => {
//calculate remaining seats
const capacityToInt = parseInt(film.capacity)
const ticketsSoldtoInt = parseInt(film.tickets_sold)
let availableTix = capacityToInt - ticketsSoldtoInt
//render movie card
movieTitle.innerHTML = `${film.title}`
moviePoster.src = `${film.poster}` //will come back to this
runTime.innerHTML = `${film.runtime} minutes`
showTime.innerHTML = `${film.showtime}`
tixLeft.innerHTML = `${availableTix}`
info.innerHTML = `${film.description}`
//movie
}
//add event listener to buy tickets
buyTix.addEventListener('click', e => {




})

//persist amount of available tickets after it is clicked


document.addEventListener("DOMContentLoaded", () => {
fetchSingleFilm()
let tixtToInt = parseInt(tixLeft.innerHTML)
    tixtToInt--
tixLeft.innerHTML = `${tixtToInt}`
})