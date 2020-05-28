const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing") 

function getFilm(id) {
    fetch(`${url}/1`) 
        .then(res => res.json()) 
        .then(json => displayFilmInfo(json))  
} 

function displayFilmInfo(film) {
    posterDiv.innerHTML = `<img id="poster" src= ${film.image}>` 
    let remainingTickets = film.capacity - film.tickets_sold 
    console.log(remainingTickets)
    showingDiv.innerHTML = `<div class="card">
    <div id="title" class="title">${film.title}</div>
    <div id="runtime" class="meta">${film.runtime} minutes</div>
    <div class="content">
        <div class="description">
            <div id="film-info">[INSERT MOVIE DESCRIPTION HERE]</div>
            <span id="showtime" class="ui label">[SHOWTIME]</span>
            <span id="ticket-num">[X]</span> remaining tickets
        </div>
    </div>
    <div class="extra content">
      <div class="ui orange button">Buy Ticket</div>
    </div>
  </div>`
}