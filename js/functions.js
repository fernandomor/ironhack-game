//Aqui van las funciones



function revisarNivel(){
    nivel.innerText = `Nivel: ${numNivel}`
}


function updateCanvas(){
    revisarNivel()
    nubes.mover() //no se pone el nombre de la clase, se pone el nuevo objeto que creaste porque la clase es solo  "la fabrica" aún no le has pasado nada
    ctx.clearRect(0, 0, 900, 600)
    fondo.dibujar()
    nubes.dibujar()
    requestAnimationFrame(updateCanvas)

}

