function revisarTablero(){
    nivelHTML.innerText = `Nivel: ${numNivel}`
    vidasHTML.innerText = `Vidas: ${numVidas}`
    puntosHTML.innerHTML = `Puntaje: ${numPuntaje}`
}
function musicaPersonaje(personaje){
    let divy = document.createElement("div")
    musPersonaje.appendChild(divy)
    divy.innerHTML = `<audio controls>
    <source src= ${personaje.cancion} type="audio/mpeg">
    Your browser does not support the audio tag.
  </audio>`
}
function infoPersonaje(personaje){
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
function comparePos(personaje,mouseP){
    let mousePos = mouseP
    let personajePos = personaje
    if(mousePos.x>personajePos.x && mousePos.x < (personajePos.x+personajePos.width)){
        if(mousePos.y > personajePos.y && mousePos.y < (personajePos.y + personajePos.width)){
            numPuntaje += 500
        }
    }else{
        numVidas--
    }
}

function updateCanvas(){
    revisarTablero()
    // nubes.mover() //no se pone el nombre de la clase, se pone el nuevo objeto que creaste porque la clase es solo  "la fabrica" aún no le has pasado nada
    // ctx.clearRect(0, 0, 900, 600)
    // fondo.dibujar()
    // if(statusRnd===false){
    //     statusRnd=true
    //     britney.positionRnd()
    // }
    // britney.dibujar()
    // nubes.dibujar()
    requestAnimationFrame(updateCanvas)
}



