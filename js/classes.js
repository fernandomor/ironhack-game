//CANVAS
const canva = document.querySelector("#canva")
ctx = canva.getContext('2d')
    //VARIABLES
let frames = 0
let numVidas = 3
let numNivel = 1
let numPuntaje = 0
let speed = 3
let statusRnd = false
let statusRndDos = false
let nubesAct = false
let mostrarSeccionPreguntas = true
const arrRespuestasCorrectas = ["Lady Gaga", "AMLO", "La brittany", "Elton John", "Jim Morrison", "James Hetfield"]
    //OBJETOS Y ARREGLOS
const characters = {
        ladyGaga: {
            img: "./img/ladygaga-ref.jpg",
            cancion: "./Canciones/pokerface.mp3",
            respuestas: ["Hannah Montana", "Lady Gaga", "Beyonce"],
            mensaje: "Gracias pequeño mounstro por saber que soy tu mama mounstra"
        },
        amlo: {
            img: "./img/amlo-ref.jpeg",
            cancion: "./Canciones/amlo.mp3",
            respuestas: ["AMLO", "Musollini", "Hitler"],
            mensaje: "Grajias .....pejelagarto....... por.....todo, y el PRI roboj maj"
        },
        spears: {
            img: "./img/britneySpears-ref.png",
            cancion: "./Canciones/spears.mp3",
            respuestas: ["La brittany", "Kim Kardashian", "Madonna"],
            mensaje: "Ups baby, si soy yo"
        },
        elton: {
            img: "./img/elton-ref.png",
            cancion: "./Canciones/saturday.mp3",
            respuestas: ["Billy Joel", "Freddie Mercury", "Elton John"],
            mensaje: "Ya quiero mi taza de té, gracias por buscarme rocketman"
        },
        theDoors: {
            img: "./img/morrison-ref.jpg",
            cancion: "./Canciones/doors.mp3",
            respuestas: ["Jonh Lennon", "Kurt Cobain", "Jim Morrison"],
            mensaje: "Abriste la puerta correcta, salvame"
        },
        metallica: {
            img: "./img/james-ref.png",
            cancion: "./Canciones/metalica.mp3",
            respuestas: ["James Hetfield", "Lars Ulrich", "Paul Stanley"],
            mensaje: "Justicia para todos, incluso para ti"
        }
    }
    //SELECTORES
const botonStart = document.querySelector("#start")
const botonReglas = document.querySelector("#intrucciones")
const divInicio = document.querySelector("#inicioJuego")
let nivelHTML = document.querySelector("#nivel")
let vidasHTML = document.querySelector("#vidas")
let puntosHTML = document.querySelector("#puntos")
let seccionPreguntas = document.querySelector("#preguntas")
let imgRef = document.querySelector("#img-ref")
let msgPersonaje = document.querySelector("#mensaje")
let musPersonaje = document.querySelector("#musica")
let opcionUno = document.querySelector("#op1")
let opcionDos = document.querySelector("#op2")
let opcionTres = document.querySelector("#op3")
let modalInstrucciones = document.getElementById("myModalInstrucciones")
let myModalLooser = document.getElementById("myModalLooser")
let span = document.getElementsByClassName("close")[0]
let span2 = document.getElementsByClassName("close")[1]

//CLASES
//IMAGEN PADRE
class ImagenInit {
    constructor(width, height, x, y, image, nivel) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.image = new Image()
        this.image.src = image
        this.image.onload = () => {
            this.dibujar()
        }
        this.nivel = nivel
    }
    dibujar() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}
//PERSONAJES
class Personaje extends ImagenInit {
    positionRnd() {
        this.x = Math.floor(Math.random() * canva.width - 30)
        this.y = Math.floor(Math.random() * canva.height - 30)
    }
}
//NUBES
class Nubes extends ImagenInit {
    mover() {
        this.x += speed
        this.x %= canva.width
    }
}