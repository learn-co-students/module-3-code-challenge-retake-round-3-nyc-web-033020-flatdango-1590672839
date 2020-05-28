const url = "http://localhost:3000/films/1"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")

fetch(url)
.then(res => res.json())
.then(data => {
    let filmOne = data
    document.getElementById('poster').src = filmOne.poster
    document.getElementById('title').innerText = filmOne.title 
    document.getElementById('runtime').innerText = filmOne.runtime + ' minutes'
    document.getElementById('showtime').innerText = filmOne.showtime 
    document.getElementById('film-info').innerText = filmOne.description 
    document.getElementById('ticket-num').innerText = parseInt(filmOne.capacity) - filmOne.tickets_sold

    const buyBtn = document.getElementById('buy-btn')
    buyBtn.addEventListener('click', event => {
        if(filmOne.capacity != filmOne.tickets_sold) {
            filmOne.tickets_sold += 1 
            fetch(url, {
                method: 'PATCH',
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json; charset=UTF-8'
                }
                // body: JSON.stringify(filmOne)
            })
            .then(response => response.json())
            .then(data => console.log(data))
        }

    })


})
