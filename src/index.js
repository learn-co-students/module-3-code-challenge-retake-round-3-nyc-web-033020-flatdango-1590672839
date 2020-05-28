const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")

const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")


document.addEventListener('DOMContentLoaded', (event) => {
const posterFirst = document.getElementById('poster')
const titleFirst = document.getElementById('title')
const runtimeFirst = document.getElementById('runtime')
const filmInfo = document.getElementById('film-info')
const showTime = document.getElementById('showtime')
const ticketNum = document.getElementById('ticket-num')
const button = document.getElementsByClassName('ui orange button')[0]


    firstMovie()
    function firstMovie(){
        fetch(`http://localhost:3000/films/1`)
        .then(r => r.json())
        .then(movie => getData(movie))
    }

    function getData(movie){
        posterFirst.src = movie.poster
        titleFirst.innerHTML = movie.title
        runtimeFirst.innerHTML = `${movie.runtime} minutes`
        filmInfo.innerHTML = movie.description
        showTime.innerHTML = movie.showtime
        ticketNum.innerHTML = `${parseInt(movie.capacity)}` - `${movie.tickets_sold}`
    }

    // when you click on buy tickets , remaining tickest will decrease 
    document.addEventListener('click', function(event){
        if (event.target.className === 'ui orange button'){
           
        }
    })

});