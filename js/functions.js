
function revisarNivel(){
    nivelHTML.innerText = `Nivel: ${numNivel}`
}
function revisarVida(){
    vidasHTML.innerText = `Vidas: ${numVidas}`
}
function revisarPuntaje(){

}
function imgReferencia(){

}
function msjPersonaje(){


function revisarNivel() {
    nivel.innerText = `Nivel: ${numNivel}`
}
function preguntas(){
    
}


function updateCanvas() {
    revisarNivel()
    revisarVida()
    nubes.mover() //no se pone el nombre de la clase, se pone el nuevo objeto que creaste porque la clase es solo  "la fabrica" aún no le has pasado nada
    ctx.clearRect(0, 0, 900, 600)
    fondo.dibujar()
    nubes.dibujar()
    requestAnimationFrame(updateCanvas)
    britney.positionRnd()
    britney.dibujar()

}