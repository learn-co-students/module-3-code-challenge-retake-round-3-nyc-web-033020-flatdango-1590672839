const url = "http://localhost:3000/films"
const headers = {
    "content-type": "application/json",
    Accept: "application/json" 
}
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing") 

function getFilms() {
    fetch(url) 
    .then(resp => resp.json()) 
    .then(films => renderFilms(films))
}

function renderFilms(films) { 
    films.forEach( film => {
        let filmDiv = document.createElement("div") 
        filmDiv.className = "film item" 
        filmDiv.innerText = film.title 
        filmDiv.id = film.id 
        filmsDiv.appendChild(filmDiv)  
    })
}

function showFilm() {
    filmsDiv.addEventListener("click", e => {
        const film_id = e.target.id 
        fetch(`${url}/${film_id}`) 
            .then(resp => resp.json()) 
            .then(film => displayFilmInfo(film)) 
    })
}
function displayFilmInfo(film) {
    posterDiv.dataset.id = film.id 
    film.id = 1
    posterDiv.src = film.poster 
    showingDiv.dataset.id = film.id 
    film.id = 1 
    let remainingTickets = film.capacity - film.tickets_sold 
    console.log(remainingTickets)
    showingDiv.innerHTML = `<div class="card">
    <div id="title" class="title">${film.title}</div>
    <div id="runtime" class="meta">${film.runtime} minutes</div>
    <div class="content">
        <div class="description">
            <div id="film-info">${film.description}</div>
            <span id="showtime" class="ui label">${film.showtime}</span>
            <span id="ticket-num">${film.remainingTickets}</span> remaining tickets
        </div>
    </div>
    <div class="extra content">
      <div class="ui orange button">Buy Ticket</div>
    </div>
  </div>` 
}

showingDiv.addEventListener("click", e=> {
    if (e.target.className === "ui orange button") {
        const div = e.target.parentElement
        const currentTicketsRemaining = parseInt(div.textContent) 
        const newTicketsRemaining = currentTicketsRemaining - 1 
        div.textContent = newTicketsRemaining 

        const id = div.dataset.id 
        fetch(`${url}/${id}`, {
            method: "PATCH", 
            headers: headers, 
            body: JSON.stringify({ remainingTickets: newTicketsRemaining})
        })
        .then(resp => resp.json()) 
        .then(console.log)
    }
})