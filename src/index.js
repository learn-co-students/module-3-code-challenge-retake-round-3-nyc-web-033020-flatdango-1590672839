document.addEventListener('DOMContentLoaded', () => {

    const url = "http://localhost:3000/films"
    const filmsDiv = () => document.querySelector("#films")
    const posterDiv = () => document.querySelector("#poster")
    const showingDiv = () => document.querySelector("#showing")

    //oops...started advanced deliverables by mistake
    const filmItems = document.getElementsByClassName('film item') 
    const filmItmArray = Array.from(filmItems)
    const movieList = filmItmArray[1]

  //fetch all movies and render them in div w/ class card below 2nd div film item
//   const getMovies = () => {
//       fetch(url)
//       .then(resp => resp.json())
//       .then(renderAllMovies)
//   }  

  //render each movie in div class card below film item
  //grab 2nd div film item
//   const renderAllMovies = movies => {
//       movies.forEach(movie => {
        
//       })
//   }

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

    //get available tx by subtracting txsold from capacity
    const capacity = movie.capacity
    const txSold = movie.tickets_sold
    const sum = capacity - txSold
    
    const availableTx = document.querySelector('#ticket-num')
    availableTx.textContent = sum 

    //deliverables doesn't ask for description, but I added just in case
    const desc = document.querySelector('#film-info')
    desc.textContent = movie.description

    const buyTxBtnHTMLColl = document.getElementsByClassName('ui orange button')
    const newArray = Array.from(buyTxBtnHTMLColl)
    const buyTxButton = newArray[0]
    buyTxButton.id = movie.id 
    buyTxButton.dataset.id = movie.tickets_sold
  }

  //buy ticket for a single movie: add event listener to buy ticket btn
  //when clicked, send PATCH request to increase num of tx sold
  //num-of-tx-sold should increase by 1 and persist to database
  //num of availTx should decrease on frontend
  const buyTxBtnHTMLColl = document.getElementsByClassName('ui orange button')
  const newArray = Array.from(buyTxBtnHTMLColl)
  const buyTxButton = newArray[0]
  
  buyTxButton.addEventListener('click', (e) => {
    const id = e.target.id
    let txSold = e.target.dataset.id
    txSold = parseInt(txSold)
    let increasedTxSold = txSold + 1

    fetch(`${url}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            'tickets_sold': increasedTxSold
        })
    })
        .then(resp => resp.json())
        .then(movie => {
            renderSingleMovie(movie)
        })
  })

  

//   getMovies()
  getSingleMovie()
})

