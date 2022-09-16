
const aplicacion = document.querySelector(`.container`)
fetch('https://animechan.vercel.app/api/quotes')
.then(response => response.json())
.then(data => {
    data.forEach(quote => {
        console.log(quote.anime)
        console.log(quote.quote)
        const p = document.createElement(`p`)
        const p1 = document.createElement(`p1`)
        p.innerHTML = "-   "+quote.anime
        p1.innerHTML ="Cita:  " +quote.quote
        aplicacion.appendChild(p)
        aplicacion.appendChild(p1)
    })
})

