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
    comparePos(britney, mousePos)
});