/*
- √GET request (http://localhost:3000/films/1) the 1st movie details (poster, title, runtime, showtime, and available tickets). The # of tickets left will need to be derived from the theater's capacity and the # of tickets sold
- 'Click' listener on the 'Buy Ticket' btn
- PATCH request to buy a ticket for a movie. The number of tickets sold for that movie should be persisted, and I should be able to see the number of available tickets decreasing on the frontend.
- I should not be able to buy a ticket if the showing is sold out.
*/

document.addEventListener('DOMContentLoaded', () => {
    const url = "http://localhost:3000/films/1"
    const filmsDiv = () => document.querySelector("#films")
    const posterDiv = () => document.querySelector("#poster")
    const showingDiv = () => document.querySelector("#showing")
    const remainingTickets = document.querySelector('#ticket-num') //tickets sold

    fetch(url)
    .then(resp => resp.json())
    .then(movie => renderMovie(movie))

    function renderMovie(movie) {
        const poster = document.querySelector('#poster')
        const title = document.querySelector('#title')
        const runtime = document.querySelector('#runtime')
        const description = document.querySelector('#film-info')
        const showtime = document.querySelector('#showtime')

        poster.src = movie.poster
        title.textContent = movie.title
        runtime.textContent = movie.runtime
        description.textContent = movie.description
        showtime.textContent = movie.showtime
        remainingTickets.textContent = parseInt(movie.capacity - movie.tickets_sold)
        // console.log(remainingTickets)

        document.addEventListener('click', event => {
            if(event.target.className === 'ui orange button') {
                // console.log(remainingTickets.textContent)
                // let ticketsSold = parseInt(movie.tickets_sold++)
                // let updatedTickets = parseInt(movie.capacity - movie.tickets_sold)


                let ticketsSold = parseInt(movie.tickets_sold++)
                remainingTickets.textContent = parseInt(movie.capacity - ticketsSold)
                // let avaTickets = parseInt(movie.capacity - ticketsSold)
                // remainingTickets.textContent = avaTickets
                // console.log(remainingTickets)
                fetch(url, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json'
                    },
                    body: JSON.stringify({'tickets_sold': ticketsSold})
                })
            }
        })
    }

    // document.addEventListener('click', event => {
    //     if(event.target.className === 'ui orange button') {
    //         // let updatedTickets = parseInt(remainingTickets.textContent--)

    //         // let ticketsSold = parseInt(remainingTickets.innerText++)
    //         // let ticketsLeft = parseInt(30 - ticketsSold)
    //         // remainingTickets.textContent = ticketsLeft
    //         // console.log(ticketsSold)
    //         // console.log(updatedTickets)
    //         // console.log(remainingTickets)
    //         // console.log(ticketsLeft) //tickets sold 
    //         // console.log(remainingTickets.textContent)

    //         fetch(url, {
    //             method: 'PATCH',
    //             headers: {
    //                 'content-type': 'application/json',
    //                 'accept': 'application/json'
    //             },
    //             body: JSON.stringify({'tickets_sold': updatedTickets})
    //         })
    //     }
    // })
})