//INICIAR JUEGO
botonStart.addEventListener("click", ()=>{
    divInicio.classList.add("esconder")
    canva.classList.remove("esconder")
    canva.classList.add("mostrar")
})

//REGLAS DEL JUEGO
botonReglas.addEventListener("click", ()=>{
    
})
//POSICIÓN DEL MOUSE


//INICIALIZACIÓN DE IMAGENES PRUEBA
// let fondo = new ImagenInit(900,600,0,0,"./img/Encuentra4.jpg")
// let nubes = new Nubes(900,800,0,0,"./img/nubes.png")

let fondo = new ImagenInit(900, 600, 0, 0, "./img/nivel0.jpg")
let nubes = new Nubes(900, 800, 0, 0, "./img/nubes.png")
let britney = new Personaje(100, 100, 0, 0, "./img/britneySpears.png")

updateCanvas()