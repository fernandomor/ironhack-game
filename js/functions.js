//Aqui van las funciones
function updateCanvas(){
    ImagenInit.mover()
    ctx.clearRect(0, 0, 900, 600)
    ImagenInit.dibujar()
    requestAnimationFrame(updateCanvas)
}


function revisarNivel(){

}