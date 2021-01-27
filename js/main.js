//INCIALIZAMOS TODAS LAS CLASES
let fondo = new ImagenInit(900, 600, 0, 0, "./img/nivel0.jpg")
let nubes = new Nubes(900, 800, 0, 0, "./img/nubes.png")
let britney = new Personaje(100, 100, 0, 0, "./img/britneySpears.png")

function updateCanvas() {
    revisarTablero()
    switch (numNivel) {
        case 1:
            nivelUno()
            break
    }
    requestAnimationFrame(updateCanvas)
}


updateCanvas()