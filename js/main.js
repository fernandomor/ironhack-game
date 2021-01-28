function updateCanvas() {
    revisarTablero()
    switch (numNivel) {
        case 1:
            niveles(characters.spears, spears, fondo)
            break
        case 2:
            niveles(characters.elton, elton, fondo)
            break
        case 3:
            niveles(characters.ladyGaga, ladyGaga, fondoTres)
            break
        case 4:
            niveles(characters.theDoors, theDoors, fondoCuatro)
            break
        case 5:
            niveles(characters.amlo, amlo, fondoCinco)
            break
        case 6:
            niveles(characters.metallica, metallica, fondoSeis)
            break
        case 7:
            ganador()
    }
    requestAnimationFrame(updateCanvas)
}
updateCanvas()