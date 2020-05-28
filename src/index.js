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
    const filmBody = document.querySelector("#films")
    const imageDiv = document.querySelector("#poster")
    const infoDiv = document.querySelector("#film-info")
    const showtimeDiv = document.querySelector("#showtime")
    const ticketDiv = document.querySelector("#ticket-num")
    const runtimeDiv = document.querySelector("#runtime")
    const titleDiv = document.querySelector("#title")


    let movieID = null
    let currentTic = null
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
            </tr>`
            filmBody.append(row)
        })
    }

    filmBody.addEventListener('click', e => {
        displaymovie(e)
    })


    function displaymovie(e){
        fetch(url)
        .then(resp => resp.json())
        .then(films => {
            films.forEach(film => {
            // console.log(e.target.dataset.id)
            if (film.id === e.target.dataset.id) {
                imageDiv.src = film.poster
                infoDiv.textContent = film.description
                showtimeDiv.textContent = film.showtime
                runtimeDiv.textContent = film.runtime
                titleDiv.textContent = film.title
                ticketDiv.textContent = film.capacity - film.tickets_sold
                movieID = film.id
                currentTic = film.tickets_sold
                }
            })
            
        })
    }

    document.addEventListener('click', e => {
        if (e.target.className === "ui orange button"){
            console.log(btn)


            fetch(`${url}/${movieID}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    tickets_sold: currentTic-1
                })
                
                
            })
        }
    })
        

    getFilms()

})