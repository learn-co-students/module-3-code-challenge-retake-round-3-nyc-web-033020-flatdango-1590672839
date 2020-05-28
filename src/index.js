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
const patch = `http://localhost:3000/films/films`
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
let ticketsSoldAsInt = parseInt(film.tickets_sold)
ticketsSoldAsInt++

const ticketPatch = () => {
    fetch(`${'http://localhost:3000/films/'}/${movieCard.id}`, {
    method: "PATCH",
    headers: {
        "accept": "application/json",
        "content-type": "application/json"
    },
    body: JSON.stringify({ tickets_sold: `${ticketsSoldAsInt}`})
    })
}
//render movie card
movieCard.id = `${film.id}`
movieTitle.innerHTML = `${film.title}`
moviePoster.src = `${film.poster}` //will come back to this
runTime.innerHTML = `${film.runtime} minutes`
showTime.innerHTML = `${film.showtime}`
tixLeft.innerHTML = `${availableTix}`
info.innerHTML = `${film.description}`

buyTix.addEventListener('click', e => {
    let tixToInteger = parseInt(tixLeft.innerHTML)
    tixToInteger -= 1
    tixLeft.innerHTML = `${tixToInteger}`


       // patch request to persist tix sold
    ticketPatch()
    })
// let ticketsSoldAsInt = parseInt(film.tickets_sold)
// ticketsSoldAsInt++
}
    
//patch for tickets
//     const ticketPatch = () => {
//     fetch(`${patch}/${movieCard.id}`, {
//     method: "PATCH",
//     headers: {
//         "accept": "application/json",
//         "content-type": "application/json"
//     },
//     body: JSON.stringify({ tickets_sold: `${_ticketsSoldAsInt}`})
//     })
// }
//ticket event listener
    // buyTix.addEventListener('click', e => {
    //     let tixToInteger = parseInt(tixLeft.innerHTML)
    //     tixToInteger -= 1
    //     tixLeft.innerHTML = `${tixToInteger}`


    //        // patch request to persist tix sold
    //     ticketPatch()
    //     })

        document.addEventListener("DOMContentLoaded", (e) => {
fetchSingleFilm()

})