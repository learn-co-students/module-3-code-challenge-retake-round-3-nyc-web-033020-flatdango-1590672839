// const url = "http://localhost:3000/films"
// const filmsDiv = () => document.querySelector("#films")
// const posterImg = () => document.querySelector("#poster")
// const showingDiv = () => document.querySelector("#showing")

const state = {
    tickets_sold: null,
    capacity: null,
    remaining_tickets: null,
    movieId: null
}

function getAllMovieData() {
    fetch(`http://localhost:3000/films`)
        .then(response => response.json())
        .then(movies => {
            renderMovieTitleList(movies)
        })
}

function renderMovieTitleList(movies) {
    const MovieHolder = document.querySelector("#films")
    MovieHolder.innerHTML = ""

    movies.forEach(movie => {
        MovieHolder.innerHTML += `<li class="movieitem" value="${movie.id}">${movie.title}</li>`
    })
}

function changeMovie() {
    document.addEventListener("click", function (event) {
        if (event.target.className === "movieitem") {
            state.movieId = event.target.value
            fetch(`http://localhost:3000/films/${state.movieId}`)
                .then(response => response.json())
                .then(movie =>{
                    renderMovies(movie)
                })
        }
    })
}

function renderMovies(movie) {
    const posterImg = document.querySelector("#poster")
    posterImg.src = movie.poster
    state.tickets_sold = movie.tickets_sold
    state.capacity = parseInt(movie.capacity, 10)

    state.remaining_tickets = state.capacity - state.tickets_sold


    const infoDiv = document.getElementById("showing")

    infoDiv.innerHTML = `
    <div class="card">
        <div id="title" class="title">${movie.title}</div>
        <div id="runtime" class="meta">${movie.runtime} minutes</div>
        <div class="content">
            <div class="description">
                <div id="film-info">${movie.description}</div>
                <span id="showtime" class="ui label">${movie.showtime}</span>
                <span id="ticket-num">${state.remaining_tickets}</span> remaining tickets
            </div>
        </div>
        <div class="extra content">
            <div class="ui orange button">Buy Ticket</div>
        </div>
    </div>
    </div>
    </div>
    </div>`
}

function clickBuyTicket() {
    document.addEventListener("click", function (event) {
        if (event.target.className === "ui orange button") {
            event.preventDefault()
            if (state.remaining_tickets <= 0) {
                event.target.innerHTML = "Sold out"
            } else {
                
                const newTicketsSold = state.tickets_sold + 1

                const options = {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        tickets_sold: newTicketsSold
                    })
                }

                fetch(`http://localhost:3000/films/${state.movieId}`, options)
                    .then(response => response.json())
                    .then(movie => {
                        renderMovies(movie)
                    })

            }

        }
    })
}

document.addEventListener("DOMContentLoaded", function () {

    getAllMovieData()
    changeMovie()
    // getSingleMovieData()
    clickBuyTicket()
})


