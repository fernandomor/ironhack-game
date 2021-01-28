let fondo = new ImagenInit(900, 600, 0, 0, "./img/nivel0.jpg")
let fondoTres = new ImagenInit(900, 600, 0, 0, "./img/nivel1.jpg")
let fondoCuatro = new ImagenInit(900, 600, 0, 0, "./img/nivel2.jpg")
let fondoCinco = new ImagenInit(900, 600, 0, 0, "./img/nivel3.jpg")
let fondoSeis = new ImagenInit(900, 600, 0, 0, "./img/nivel4.png")

let spears = new Personaje(150, 250, 0, 0, "./img/britneySpears.png", 1)
let elton = new Personaje(100, 150, 0, 0, "./img/elton.png", 2)
let ladyGaga = new Personaje(80, 150, 0, 0, "./img/ladygaga.png", 3)
let theDoors = new Personaje(70, 70, 0, 0, "./img/morrison.png", 4)
let amlo = new Personaje(60, 60, 0, 0, "./img/amlo.png", 5)
let metallica = new Personaje(50, 80, 0, 0, "./img/james.png", 6)

let nubes = new Nubes(900, 800, 0, 0, "./img/nubes.png")
    //INICIAR JUEGO
botonStart.addEventListener("click", () => {
        divInicio.classList.add("esconder")
        canva.classList.remove("esconder")
        canva.classList.add("mostrar")
    })
    //BOTONES DE RESPUESTAS
opcionUno.addEventListener("click", () => {
    respuestaCorrecta(opcionUno)
})
opcionDos.addEventListener("click", () => {
    respuestaCorrecta(opcionDos)
})
opcionTres.addEventListener("click", () => {
        respuestaCorrecta(opcionTres)
    })
    //REGLAS DEL JUEGO
botonReglas.addEventListener("click", () => {

    })
    //POSICIÓN DEL MOUSE
canva.addEventListener(`mousedown`, (e) => {
    let mousePos = getMousePos(canva, e)
    if (numNivel === 1) {
        comparePos(spears, mousePos)
    } else if (numNivel === 2) {
        comparePos(elton, mousePos)
    } else if (numNivel === 3) {
        comparePos(ladyGaga, mousePos)
    } else if (numNivel === 4) {
        comparePos(theDoors, mousePos)
    } else if (numNivel === 5) {
        comparePos(amlo, mousePos)
    } else if (numNivel === 6) {
        comparePos(metallica, mousePos)
    }

});







//POSICIÓN DEL MOUSE
canva.addEventListener(`mousedown`, (e) => {
    let mousePos = getMousePos(canva, e)
        // comparePos(britney, mousePos)
});
//como pasar esto a funcion ?- ahi se puede poner una funcion que retorne el nombre del personaje