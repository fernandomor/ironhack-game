//CANVAS
const canva = document.querySelector("#canva")
ctx = canva.getContext('2d')
//VARIABLES
let frames = 0
let numVidas = 3
let numNivel = 0
let speed = 0
//OBJETOS Y ARRGLOS
const characters = {
    ladyGaga:{
        img:"",
        cancion: "",
        respuestas:["Hannah Montana",]
    },
    amlo:{

    },
    spears:{

    },
    elton:{

    },
    theDoors:{

    },
    metallica:{

    }
}

//SELECTORES
const botonStart = document.querySelector("#start")
const botonReglas = document.querySelector("#intrucciones")
const divInicio = document.querySelector("#inicioJuego")
let nivelHTML = document.querySelector("#nivel")
let vidasHTML = document.querySelector("#vidas")


//CLASES
//IMAGEN PADRE
class ImagenInit{
    constructor(width,height,x,y,image){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.image = new Image()
        this.image.src = image
        this.image.onload = () => {
            this.dibujar()
        }
    }
    dibujar() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}

//PERSONAJES
class Personaje extends ImagenInit{
    positionRnd() {
        this.x = Math.floor(Math.random() * canva.width)
        this.y = Math.floor(Math.random() * canva.height)
    }
}
//NUBES
class Nubes extends ImagenInit {
    mover() {
        this.x += speed
        this.x %= canva.width
    }
}