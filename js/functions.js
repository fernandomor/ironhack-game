function revisarTablero() {
    nivelHTML.innerText = `Nivel: ${numNivel}`
    vidasHTML.innerText = `Vidas: ${numVidas}`
    puntosHTML.innerHTML = `Puntaje: ${numPuntaje}`
}

function musicaPersonaje(personaje) {
    let divy = document.createElement("div")
    musPersonaje.appendChild(divy)
    divy.innerHTML = `<audio controls>
    <source src= ${personaje.cancion} type="audio/mpeg">
    Your browser does not support the audio tag.
  </audio>`
}

function infoPersonaje(personaje) {
    let divImg = document.createElement("div")
    let divMsg = document.createElement("div")
    imgRef.appendChild(divImg)
    msgPersonaje.appendChild(divMsg)
    divImg.innerHTML = `<img width="300" src="${personaje.img}" alt="">`
    divMsg.innerHTML = `<p>${personaje.mensaje}</p>`
}

function respuestasPredefinidas(personaje) {
    opcionUno.innerHTML = (personaje.respuestas[0])
    opcionDos.innerHTML = (personaje.respuestas[1])
    opcionTres.innerHTML = (personaje.respuestas[2])
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: Math.floor(evt.clientX - rect.left),
        y: Math.floor(evt.clientY - rect.top)
    };
}

function comparePos(personaje, mouseP) {
    let mousePos = mouseP
    let personajePos = personaje
    if (mousePos.x > personajePos.x && mousePos.x < (personajePos.x + personajePos.width)) {
        if (mousePos.y > personajePos.y && mousePos.y < (personajePos.y + personajePos.width)) {
            numPuntaje += 500
        }
    } else {
        numVidas--
    }
}

function respuestaCorrecta(opcion) {
    let palabra = opcion.innerHTML
    if (arrRespuestasCorrectas.includes(palabra)) {
        alert("respuesta correcta , te dare unos puntos extras")
        seccionPreguntas.classList.add("esconder")
        numPuntaje += 300
    } else {
        nubesAct = true
        alert("respuesta INCORRECTA, pero te dejo mi foto")
        seccionPreguntas.classList.add("esconder")
    }
    if (mostrarSeccionPreguntas === true) {
        mostrarSeccionPreguntas = false
    }
}

function mostrarPregunta() {
    if (mostrarSeccionPreguntas === false) {
        seccionPreguntas.classList.remove("esconder")
        mostrarSeccionPreguntas = true
    }
}

function looser() {
    if (numVidas = 0) {
        alert("NOS CONDENASTE A TODOS, GRACIAS")
    }
}

function ganador() {
    if (numNivel = 5) {
        alert("NOS HAS SALVADO, ESTAMOS AGRADECIDOS")
    }
}

function nivelUno() {
    ctx.clearRect(0, 0, 900, 600)
    if (mostrarSeccionPreguntas === false) {
        if (statusRndDos === false) {
            infoPersonaje(characters.ladyGaga)
            statusRndDos = true
        }
        if (nubesAct === true) {
            ctx.clearRect(0, 0, 900, 600)
            nubes.mover()
            fondo.dibujar()
            britney.dibujar()
            nubes.dibujar()
        } else {
            fondo.dibujar()
            britney.dibujar()
        }
    }
    if (statusRnd === false) {
        britney.positionRnd()
        respuestasPredefinidas(characters.ladyGaga)
        musicaPersonaje(characters.ladyGaga)
        statusRnd = true
    }
}

let fondo = new ImagenInit(900, 600, 0, 0, "./img/nivel0.jpg")
let britney = new Personaje(100, 100, 0, 0, "./img/britneySpears.png", 1)
let nubes = new Nubes(900, 800, 0, 0, "./img/nubes.png")