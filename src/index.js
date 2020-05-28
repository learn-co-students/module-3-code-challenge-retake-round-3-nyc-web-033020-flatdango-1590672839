
// %%% fetch films data

// find films html elements on page
// >>> poster
// >>> title
// >>> runtime
// >>> showtime
// >>> available tickets

// add json data to elements for each film

// addEventListener on click to buy ticket
// >>> fetch POST, options, .then(getData) to update on frontend

// can't buy ticket if tickets === 0



// const url = "http://localhost:3000/films"
// const filmsDiv = () => document.querySelector("#films")
// const posterDiv = () => document.querySelector("#poster")
// const showingDiv = () => document.querySelector("#showing")

document.addEventListener('DOMContentLoaded', () => {


    function getFilms() {
        fetch('http://localhost:3000/films')
            .then(response => response.json())
            .then(movies => {
                renderFilms(movies)
            })
    }

    console.log(getFilms())

    function renderFilms() {

        const filmList = document.getElementById('showing')

        filmList.innerHTML = " "

        //filmPoster.scr = `${film[0].poster}`

        //movies.forEach(movie => {

            filmList.innerHTML += `

            <div id="title" class="title">${movie.title}</div>
            <div id="runtime" class="meta">${movie.runtime} minutes</div>
            <div class="content">
            <div class="description">
            <div id="film-info">${movie.description}</div>
            <span id="showtime" class="ui label">${movie.showtime}</span>
            <span id="ticket-num">${movie.tickets - sold}</span> remaining tickets
            </div>
            </div>
            `
        }
    })

    function buyTickets() {

        addEventListener("click", function (event) {
            event.preventDefault()
            if(event.target.className === "ui orange button") {


                const ticketsSold = event.target
                ticketsSold++

                const options = {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json'
                    },
                    body: JSON.stringify({
                        tickets_sold: ticketsSold.value
                    })
                }

                fetch(`http://localhost:3000/films/${id}`, options)
                .then(response => response.json())
                .then(getFilms)

            }
        })
    }
})
