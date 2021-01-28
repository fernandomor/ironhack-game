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

function reset() {
    statusRndDos = false
    statusRnd = false
    nubesAct = false
    imgRef.innerHTML = ""
    msgPersonaje.innerHTML = ""
    musPersonaje.innerHTML = ""
}

function comparePos(personaje, mouseP) {
    let mousePos = mouseP
    let personajePos = personaje
    if (mousePos.x > personajePos.x && mousePos.x < (personajePos.x + personajePos.width)) {
        if (mousePos.y > personajePos.y && mousePos.y < (personajePos.y + personajePos.height + 20)) {
            numPuntaje += 500
            numNivel++
            mostrarPregunta()
            reset()
        }
    } else if (numVidas === 0) {
        looser()
        reset()
    } else {
        numVidas--
    }
}

function comparePos(personaje, mouseP) {
    let mousePos = mouseP
    let personajePos = personaje
    if (mousePos.x > personajePos.x && mousePos.x < (personajePos.x + personajePos.width)) {
        if (mousePos.y > personajePos.y && mousePos.y < (personajePos.y + personajePos.width)) {
            numPuntaje += 500
            numNivel++

            mostrarPregunta()
            reset()

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
    if (numVidas === 0) {
        alert("NOS CONDENASTE A TODOS, GRACIAS")
        numNivel = 1
    }
}

function ganador() {
    alert("NOS HAS SALVADO, ESTAMOS AGRADECIDOS")
    numNivel = 1
}

function niveles(objCharacters, clasPersonaje, clasFondo) {
    ctx.clearRect(0, 0, 900, 600)
    if (mostrarSeccionPreguntas === false) {
        if (statusRndDos === false) {
            infoPersonaje(objCharacters)
            statusRndDos = true
        }
        if (nubesAct === true) {
            ctx.clearRect(0, 0, 900, 600)
            nubes.mover()
            clasFondo.dibujar()
            clasPersonaje.dibujar()
            nubes.dibujar()
        } else {
            clasFondo.dibujar()
            clasPersonaje.dibujar()
        }
    }
    if (statusRnd === false) {
        clasPersonaje.positionRnd()
        respuestasPredefinidas(objCharacters)
        musicaPersonaje(objCharacters)
        statusRnd = true
    }
}