const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing") 
const remainingTickets = film.capacity - film.tickets_sold 

function getFilms() {
    fetch(url) 
    .then(resp => resp.json()) 
    .then(json => renderFilms(div))
}

function getFilm(id) {
    fetch(url+id)  
        .then(res => res.json()) 
        .then(json => displayFilmInfo(json))  
} 

function remainingTickets(id, remainingTickets) {
    fetch(url + id, {
        method: "PATCH", 
        headers: {
            "Content-Type": "application/json", 
            Accept: "application/json" 
        },
        body: JSON.stringify({
            remainingTickets: remainingTickets
        })
    })
} 

function renderFilms(films) {
    let li = document.createElement("li") 
}

function displayFilmInfo(film) {
    posterDiv.dataset.id = film.id 
    posterDiv.innerHTML = `<img id="poster" src= ${film.image}>` 
    showingDiv.dataset.id = film.id 
    
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