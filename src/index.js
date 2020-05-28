const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")
const movieCard = document.querySelector('.card')
const movieTitle = document.querySelector('#title')
const singleFilm = "http://localhost:3000/films/1"
//patch: /films/[:id]
//get single movie: `http://localhost:3000/films/${id}`

//See the first movie's details, including its poster, title, runtime, 
//showtime, and available tickets (the number of tickets left will need to be derived 
//from the theater's capacity and the number of tickets sold)


//send fetch to get movie's details
const fetchSingleFilm = () => {
fetch(singleFilm)
.then(resp => resp.json)
.then(renderFilms)
}
//renderFilms
const renderFilms = (film) => {
movieTitle.innerHTML = `${film.title}`
console.log(film.title)
}
    
//create logic to deteermine tickets sold







document.addEventListener("DOMContentLoaded", () => {
fetchSingleFilm()

})