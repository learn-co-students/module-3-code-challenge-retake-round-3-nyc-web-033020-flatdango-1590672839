const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")



// - See the first movie's details, including its **poster, 
// title, runtime, showtime, and available tickets** 
// (the number of tickets left will need to be derived from the 
//     theater's capacity and the number of tickets sold)
// - Buy a ticket for a movie. The number of tickets sold for
//  that movie should be persisted, and I should be able to see
//   the number of available tickets decreasing on the frontend.
// - I should not be able to buy a ticket if the showing is sold
//  out.

// http://localhost:3000
// - GET `/films/[:id]` (start with `/films/1`)
// - PATCH `/films/[:id]`
// - GET `/films` (for Advanced Deliverables only)

// function renderMovie(movie){
//     const h1 = document.createElement('h1')
//     const h2 = document.createElement('h2')
//     const p = document.createElement('p')

//     h1.textContent = movie.title
//     h2.textContent = movie.runtime
//     p.textContent = movie.description 

//     filmsDiv.append(h1, h2, p)
// }

// function renderAllMovies(movies){
//     movies.forEach(renderMovie)
// }


const titleSection = document.querySelector('#title')
const descriptionSection = document.querySelector('#film-info')
const runTime = document.querySelector('#runtime')
const moviePoster = document.querySelector('#poster')
const showTime = document.querySelector('#showtime')
const availableTickets = document.querySelector('#ticket-num')
const button = document.querySelector('#button')


function renderMovie(movie){
    descriptionSection.textContent = movie.description
    titleSection.textContent = movie.title
    runTime.textContent = movie.runtime + 'min'
    moviePoster.textContent = movie.poster
    showTime.textContent = movie.showtime
    availableTickets.textContent = parseInt(movie.capacity) - movie.tickets_sold
}

button.addEventListener('click', e =>{
    e.preventDefault()

    fetch("http://localhost:3000/films/1", {
        method: 'PATCH',
        body: JSON.stringify(),
        headers: {
            "Content-Type": 'application/json'
        }
        .then(r => r.json())
        .then( )
    })


    // if (movie.capacity > Number(movie.tickets_sold)){
    //     movie.capacity - Number(movie.tickets_sold)
    // }

})

fetch("http://localhost:3000/films/1")
    .then(response => response.json())
    .then(renderMovie);