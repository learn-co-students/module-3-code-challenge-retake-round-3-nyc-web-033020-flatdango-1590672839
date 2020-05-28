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
// const extraContent = document.getElementsByClassName('extra content')[0]
const card = document.getElementsByClassName('card')[0]
const div = document.createElement('div')

card.append(div)

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

        div.innerHTML = movie.tickets_sold

        ticketNum.innerHTML = `${parseInt(movie.capacity)}` - `${movie.tickets_sold}`
    
    }

    // when you click on buy tickets , remaining tickest will decrease 
    document.addEventListener('click', function(event){
        if (event.target.className === 'ui orange button'){
           // when user clicks on button 
           // I wnat titckets sold get increase 
           // for this reason x will get decrease because of minus thing 
            // div.innerHTML++

          
           fetch(`http://localhost:3000/films/1`)
           .then( r => r.json())
           .then(firstMovie => {
                 let x =  firstMovie.tickets_sold
                 x++
                 let y = parseInt(firstMovie.capacity) 
                 ticketNum.innerHTML = y - x


                fetch(`http://localhost:3000/films/1`, {
                    method: "PATCH",
                    headers:   {
                        'Content-Type': 'application/json',
                        'accept': 'application/json'
                      },
                      body: JSON.stringify({ tickets_sold: x }) 
                })

                if (x > y ){ 
               let  x = y 


                    fetch(`http://localhost:3000/films/1`, {
                    method: "PATCH",
                    headers:   {
                        'Content-Type': 'application/json',
                        'accept': 'application/json'
                      },
                      body: JSON.stringify({ tickets_sold: x }) 

                })

            }
      



           })

          


                 
                 




             
        
             
              
}
          

         
        
    })



});





// const totalSold = document.getElementById('total-sold')
// console.log(totalSold)