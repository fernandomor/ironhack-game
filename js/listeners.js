//aqui van los eventos listener

const botonStart = document.querySelector("#start")
const botonReglas = document.querySelector("#intrucciones")
const divInicio = document.querySelector("#inicioJuego")


botonStart.addEventListener("click", ()=>{
    divInicio.classList.add("esconder")
    canva.classList.remove("esoconder")
    canva.classList.add("mostrar")
    updateCanvas()

})

botonReglas.addEventListener("click", ()=>{
    
})