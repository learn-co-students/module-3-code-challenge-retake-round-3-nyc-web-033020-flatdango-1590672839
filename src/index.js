document.addEventListener('DOMContentLoaded', () => {

    const url = "http://localhost:3000/films"
    const filmsDiv = () => document.querySelector("#films")
    const posterDiv = () => document.querySelector("#poster")
    const showingDiv = () => document.querySelector("#showing")

  //fetch a single movie and render its 
  //poster, title, runtime, showtime, and available tickets
  const getSingleMovie = movie => {
      fetch(`${url}/1`)
      .then(resp => resp.json())
      .then(renderSingleMovie)
  }

  const renderSingleMovie = movie => {
    const poster = document.querySelector('#poster')
    poster.src = movie.poster 
    const title = document.querySelector('#title')
    title.textContent = movie.title
    const runtime = document.querySelector('#runtime')
    runtime.textContent = movie.runtime 
    const showtime = document.querySelector('#showtime')
    showtime.textContent = movie.showtime 

    const capacity = movie.capacity
    const txSold = movie.tickets_sold
    const availTx = capacity - txSold
    
    const availableTx = document.querySelector('#ticket-num')
    availableTx.textContent = placeholder

    //deliverables doesn't ask for description, but I added just in case
    const desc = document.querySelector('#film-info')
    desc.textContent = movie.description
  }

  getSingleMovie()
})

