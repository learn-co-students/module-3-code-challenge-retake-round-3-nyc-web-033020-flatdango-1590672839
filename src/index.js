const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")
document.addEventListener("DOMContentLoaded", event => {
    getMovieInfo()
    ticketEvent()
})

function getMovieInfo(){
    let firstMovie = 1
 fetch(`${url}/${firstMovie}`)
.then(response => response.json())
.then(data => displayMovieInfo(data))
}

function displayMovieInfo(data){
    let poster = document.querySelector('#poster')
    poster.src = `${data.poster}`
    let title = document.querySelector('#title')
    title.innerHTML = `${data.title}`
    let runtime = document.querySelector(`#runtime`)
    runtime.innerHTML = `${data.runtime} mins`
    let description = document.querySelector('#film-info')
    description.innerHTML = `${data.description}`
    let showtime = document.querySelector('#showtime')
    showtime.innerHTML = `${data.showtime}`
    let tickets = document.querySelector('#ticket-num')
    let ticketsSold = data.tickets_sold
    let capacity = data.capacity
    let remainingTickets = capacity - ticketsSold
    tickets.innerHTML = remainingTickets
}

function ticketEvent(){
let orangeButton = document.querySelector('.ui.orange.button')
orangeButton.value = 'Orange'
document.addEventListener("click", event =>{
    (event.target.value === 'Orange')
        decreaseTicketNumber() 
})
}


function decreaseTicketNumber(){
    let firstMovie = 1
    let ticketsSpan = document.querySelector('#ticket-num')
    let ticketsLeftOnScreen = ticketsSpan.innerHTML
    let remainingTickets = ticketsLeftOnScreen
    
    if (remainingTickets>0){
        remainingTickets-- 
        console.log(remainingTickets)
    fetch(`${url}/${firstMovie}`, {
        method: "PATCH",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify({ticketsLeftOnScreen:remainingTickets})
    })
    .then(response => response.json())
    .then(data => displayNewMovieInfo(data))
    
}
    else{
        let orangeButton = document.querySelector('.ui.orange.button')
        orangeButton.disabled = true
        orangeButton.innerHTML="SOLD OUT!"
    }
}




function displayNewMovieInfo(data){
    let poster = document.querySelector('#poster')
    poster.src = `${data.poster}`
    let title = document.querySelector('#title')
    title.innerHTML = `${data.title}`
    let runtime = document.querySelector(`#runtime`)
    runtime.innerHTML = `${data.runtime} mins`
    let description = document.querySelector('#film-info')
    description.innerHTML = `${data.description}`
    let showtime = document.querySelector('#showtime')
    showtime.innerHTML = `${data.showtime}`
    let availableTickets =document.querySelector('#ticket-num')
     availableTickets.innerHTML = `${data.ticketsLeftOnScreen}`
}

