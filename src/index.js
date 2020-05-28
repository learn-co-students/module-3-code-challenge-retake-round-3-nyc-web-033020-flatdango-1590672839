const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")
document.addEventListener("DOMContentLoaded", event => {
    getMovieInfo()
})

function getMovieInfo(){
    let firstMovie = 1
 fetch(`${url}/${firstMovie}`)
.then(response => response.json())
.then(data => displayMovieInfo(data))
}

function displayMovieInfo(data){
    let poster = document.querySelector('#poster')
    poster.src = `${data.poster}`
    let title = document.querySelector('#title')
    title.innerHTML = `${data.title}`
    let runtime = document.querySelector(`#runtime`)
    runtime.innerHTML = `${data.runtime} mins`
    let description = document.querySelector('#film-info')
    description.innerHTML = `${data.description}`
    let showtime = document.querySelector('#showtime')
    showtime.innerHTML = `${data.showtime}`
    let tickets = document.querySelector('#ticket-num')
    let ticketsSold = data.tickets_sold
    let capacity = data.capacity
    let remainingTickets = capacity - ticketsSold
    tickets.innerHTML = remainingTickets
}