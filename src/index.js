// const url = "http://localhost:3000/films"
// const filmsDiv = () => document.querySelector("#films")
// const posterImg = () => document.querySelector("#poster")
// const showingDiv = () => document.querySelector("#showing")


state = {
    tickets_sold: null,
    capacity: null,
    remaining_tickets: null
}
function getFirstFilmData() {
    fetch(`http://localhost:3000/films/1`)
        .then(response => response.json())
        .then(movie => { renderFilmPosterAndDivs(movie) }
        )
}

function renderFilmPosterAndDivs(movie) {
    const posterImg = document.querySelector("#poster")
    posterImg.src = movie.poster
    state.tickets_sold = movie.tickets_sold
    state.capacity = parseInt(movie.capacity, 10)

    // state.remaining_tickets = state.capacity - state.tickets_sold

    const infoDiv = document.getElementById("showing")

    infoDiv.innerHTML = `<div class="card">
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
            
            // spanTicketsSold = document.getElementById("ticket-num")
            
            // spanTicketsSoldInteger = parseInt(spanTicketsSold.innerHTML, 10)
            // spanTicketsSold
            // console.log(spanTicketsSoldInteger)
           
            
            // //tickets Available = Ticket capacity - TicketsSold + 1
            const newTicketsSold = state.tickets_sold + 1
            // state.tickets_sold - 1

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

            fetch(`http://localhost:3000/films/1`, options)
            .then(response => response.json())
            .then(movie => {
                renderFilmPosterAndDivs(movie)
            })
        }
    })
}

// function renderAllFilmData(films) {
//     const filmTitles = Array.from(document.getElementsByClassName("film item"))[1]
//     filmTitles.innerHTML = ""

//     films.forEach(film => {
//         filmTitles.innerHTML += `
//         <li></li>
//         `
//     })
// }

getFirstFilmData()
clickBuyTicket()