//aqui van las constantes
const botonStart = document.querySelector("#start")
const botonReglas = document.querySelector("#intrucciones")
const divInicio = document.querySelector("#inicioJuego")
const canva = document.querySelector("#canva")
ctx = canva.getContext('2d')
let frames = 0
let vidas = 3
let numNivel = 0
let nivel = document.querySelector("#nivel")
let speed = 2


//aqui van las clases
class ImagenInit{
    constructor(width,height,x,y,image){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.image = new Image()
        this.image.src = image
        this.image.onload = ()=>{
                this.dibujar()
        }
    }
    dibujar(){
        ctx.drawImage(this.image, this.x, this.y,this.width,this.height)
    }
}

// class Personaje extends ImagenInit{
//       
// }

class Nubes extends ImagenInit{
    mover(){
         this.x += speed
         this.x %= canva.width
    }
}



