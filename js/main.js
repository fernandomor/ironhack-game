function updateCanvas(){
    revisarTablero()
    switch(numNivel){
        case 1: nivelUno()
        break
    }
    requestAnimationFrame(updateCanvas)
}


updateCanvas()



