// See the first movie's details, including its **poster, title, runtime, showtime, and available tickets** 
// (the number of tickets left will need to be derived from the theater's capacity and the number of tickets sold)
// - Buy a ticket for a movie.The number of tickets sold for that movie should be persisted, and I should be able 
// to see the number of available tickets decreasing on the frontend.
// - I should not be able to buy a ticket if the showing is sold out.

document.addEventListener('DOMContentLoaded', () => {
    const url = "http://localhost:3000/films"
    const filmsDiv = () => document.querySelector("#films")
    const posterDiv = () => document.querySelector("#poster")
    const showingDiv = () => document.querySelector("#showing")
    const filmBody = document.getElementById("films")
    // const imageDiv = document.querySelector("poster")


    const getFilms = () =>{
        fetch(url)
        .then(resp => resp.json())
        // .then(console.log)
        .then(renderMovies)
    }
    const renderMovies = movies => {
        filmBody.innerHTML = ""
        movies.forEach(movie => {
            const row = document.createElement('tr')
            row.dataset.id = movie.id
            row.innerHTML = `
            <tr>
            <tr>Title: ${movie.title}</tr>
            <tr>Runtime: ${movie.runtime}</tr>
            <tr>Showtime: ${movie.showtime}</tr>
            <tr>Available Tickets: ${movie.capacity-movie.tickets_sold}</tr>
            </tr>`
            filmBody.append(row)
        })
    }

    filmBody.addEventListener('click', e => {
        fetch(url)
        .then(resp => resp.json)
        .then(films => {films.forEach(film =>{
            if (film.id === event.target.dataset.id) {
            }

        })})


        console.log(event.target)
        
    })

    getFilms()

})