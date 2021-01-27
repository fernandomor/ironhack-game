let fondo = new ImagenInit(900, 600, 0, 0, "./img/nivel0.jpg")
let fondoTres = new ImagenInit(900, 600, 0, 0, "./img/nivel1.jpg")
let fondoCuatro = new ImagenInit(900, 600, 0, 0, "./img/nivel2.jpg")
let fondoCinco = new ImagenInit(900, 600, 0, 0, "./img/nivel3.jpg")
let fondoSeis = new ImagenInit(900, 600, 0, 0, "./img/nivel4.png")

let spears = new Personaje(100, 100, 0, 0, "./img/britneySpears.png", 1)
let elton = new Personaje(100, 100, 0, 0, "./img/elton.png", 2)
let ladyGaga = new Personaje(100, 100, 0, 0, "./img/ladygaga.jpg", 3)
let theDoors = new Personaje(100, 100, 0, 0, "./img/morrison.jpg", 4)
let amlo = new Personaje(100, 100, 0, 0, "./img/peje.jpeg", 5)
let metallica = new Personaje(100, 100, 0, 0, "./img/james.png", 6)

let nubes = new Nubes(900, 800, 0, 0, "./img/nubes.png")

function updateCanvas() {
    revisarTablero()
    ctx.clearRect(0, 0, 900, 600)
    switch (numNivel) {
        case 1:
            niveles("spears", fondo, spears)
            break
            // case 2:
            //     niveles(elton, fondo)
            //     break
            // case 3:
            //     niveles(ladyGaga, fondoTres)
            //     break
            // case 4:
            //     niveles(theDoors, fondoCuatro)
            //     break
            // case 5:
            //     niveles(amlo, fondoCinco)
            //     break
            // case 6:
            //     niveles(metallica, fondoSeis)
            //     break
    }
    requestAnimationFrame(updateCanvas)
}


updateCanvas()