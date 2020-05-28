
// %%% fetch films data

// find films html elements on page
// >>> poster
// >>> title
// >>> runtime
// >>> showtime
// >>> available tickets

// add json data to elements for each film

// addEventListener on click to buy ticket
// >>> fetch POST, options, .then(getData) to update on frontend

// can't buy ticket if tickets === 0



// const url = "http://localhost:3000/films"
// const filmsDiv = () => document.querySelector("#films")
// const posterDiv = () => document.querySelector("#poster")
// const showingDiv = () => document.querySelector("#showing")

function getFilms() {
    fetch('http://localhost:3000/films')
    .then(response => response.json())
    .then(films => {
        renderFilms(films)
    })
}

function renderFilms(film) {

    const filmID =
    const filmPoster = document.getElementById('poster')

    "id": "1",
    "title": "The Giant Gila Monster",
    "runtime": "108",
    "capacity": "30",
    "showtime": "04:00PM",
    "tickets_sold": 27,
    "description":
    filmPoster.scr = `${film.poster}`

    // films.forEach(film => {
        // filmPoster.scr = `${film.poster}`


}


document.addEventListener('DOMContentLoaded', () => {
    getFilms()
    renderFilms()

})
