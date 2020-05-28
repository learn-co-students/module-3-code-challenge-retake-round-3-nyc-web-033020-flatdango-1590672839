const url = "http://localhost:3000/films"
const filmsDiv = () => document.querySelector("#films")
const posterDiv = () => document.querySelector("#poster")
const showingDiv = () => document.querySelector("#showing")

fetch(url)
.then(res => res.json())
.then(data => {
    let filmOne = data[0]
    let posterImg = document.getElementById('poster').src(filmOne.poster)
    posterDiv.src(filmOne.poster)  
})
