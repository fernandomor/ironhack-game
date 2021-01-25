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

    mover(){
        setInterval(()=>{
            this.x += 25
            frames += 50
        },1000)
    }
}

// class Personaje extends ImagenInit{
//     constructor(){
//         this.puntos = 100 // esta es la base de puntos y cada nivel se le sube * 2
//     }
    
// }

// class Nubes extends ImagenInit{
//     constructor(x){
//         super(x)
//     }

    
// }

let fondo = new ImagenInit(900,600,0,0,"./img/Encuentra4.jpg")
// let ladyGaga = new Personaje(100,300,0,0,"./img/ladygaga.jpg")
// let nubes = new Nubes(900,600,0,0,"./img/nubes.jpg")

