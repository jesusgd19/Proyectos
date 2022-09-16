const aplicacion = document.querySelector(`.container`)
const link= 'https://api.thecatapi.com/v1/images/search'
const button = document.querySelector(`button`)

const link1= 'https://api.thedogapi.com/v1/images/search'
const button1 = document.getElementById("perros")



button.addEventListener("click",gatos())
function gatos(){
fetch(link)
.then(response => response.json())
.then(data => {

    const img = document.querySelector(`img`);
    img.src = data[0].url
})}

button1.addEventListener("click",Perros())
function Perros(){
fetch(link1)
.then(response => response.json())
.then(data => {
    const img1 = document.querySelector(`img`);
    img1.src = data[0].url
})}

