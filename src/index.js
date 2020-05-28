// const url = "http://localhost:3000/films"
// const filmsDiv = () => document.querySelector("#films")
// const posterDiv = () => document.querySelector("#poster")
// const showingDiv = () => document.querySelector("#showing")

url = "http://localhost:3000/films"

document.addEventListener('DOMContentLoaded', (events) => {
    filmsFetch()
    buyTicket()

})

function filmsFetch(){ 
    fetch(url)
    .then(res => res.json())
    .then(films => displayFilm(films))
    }

    function fetchPatch(ticketsSold){
        fetch(`${url/$filmsList[0].id}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json', 
                'Accept': "application/json"
            },
            body: JSON.stringify({tickets_sold: ticketsSold})
        })
    }
    
//I need to get the films from the json to the Dom 
function displayFilm(films){
    filmsList = films
    firstPoster()
    insertFilm()
}

function firstPoster() {
    const poster = document.getElementById('poster')
    poster.src = filmsList[0].poster
}

//i need to get the film information to the dom 
function insertFilm() {
    const title = document.getElementById("title")
    title.innerText = filmsList[0].title

    const runtime = document.getElementById("runtime")
    runtime.innerText = `${filmsList[0].runtime} minutes`

    const descripton = document.getElementById("film-info")
    descripton.innerText = filmsList[0].descripton
    console.log(descripton)

    const showtime = document.getElementById("showtime")
    showtime.innerText = filmsList[0].showtime

    const tickets = document.getElementById('ticket-num')
    const remainingTickets = (filmsList[0].capacity - filmsList[0].tickets_sold)
    tickets.innerText = `${parseInt(remainingTickets)}`
}

function buyTicket() {
    showCard = document.getElementById("showing")
    showCard.addEventListener('click', (e)=> {
        e.preventDefault()
        const descripton = parseInt(showCard.querySelectorAll('span')[1].innerText)
        if (descripton > 0) {
            filmsList[0].tickets_sold = filmsList[0].tickets_sold +1
            const newTicketSold = filmsList[0].tickets_sold
            insertFilm()
            fetchPatch(newTicketSold)
        }
    })
}


//NOT SHOWING UP! WHYYYYYY???
        // const filmList = document.querySelector('#showing')
        // films.forEach(f => insertFilm(f, filmList))
        // filmList.addEventListener('change', event => {
        //     const showingDiv = document.querySelector('#showing')
        //     displayFilm(event.target.value, showingDiv)
        // })

// function displayFilm(filmId, div) {
//     fetch(`${url}/${filmId}`)
//     .then(res => res.json())
//     .then(film => {
//         div.querySelector('#title').textContent = film.title
//         div.querySelector('#runtime').textContent = film.runtime
//         // div.querySelector
//         // div.querySelector
//     })
//     //NOT ATTACHING!!!!! =/ 
//     function insertFilm(film, filmList) {
//         const li = document.createElement('li')
//         li.innerText = film.title
//         li.setAttribute('value', film.id)
//         filmList.appendChild(li)
//     }
// }