// See the first movie's details, including its **poster, title, runtime, showtime, and available tickets** 
// (the number of tickets left will need to be derived from the theater's capacity and the number of tickets sold)
// - Buy a ticket for a movie.The number of tickets sold for that movie should be persisted, and I should be able 
// to see the number of available tickets decreasing on the frontend.
// - I should not be able to buy a ticket if the showing is sold out.

const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")

document.addEventListener('DOMContentLoaded', () =>{
    const getFilms = () =>{
        fetch(url)
        .then(resp => resp.json())
        // .then(console.log)
        .then(renderMovies)
    }
    const movieid = null 
    const renderMovies = movies => {
        let filmBody = document.getElementById("films")
        filmBody .innerHTML = ""
        console.log(filmBody)
        movies.forEach(movie => {
            filmBody.innerHTML += `
            <td id="${movie.id}">
            <td>Title: ${movie.title}</td>
            <td>Runtime: ${movie.runtime}</td>
            <td>Showtime: ${movie.showtime}</td>
            <td>Available Tickets: ${movie.capacity-movie.tickets_sold}</td>
            </td>`

        })
    }

    getFilms()

})