//aqui van los eventos listener
botonStart.addEventListener("click", ()=>{
    divInicio.classList.add("esconder")
    canva.classList.remove("esconder")
    canva.classList.add("mostrar")
})

botonReglas.addEventListener("click", ()=>{
    
})

let fondo = new ImagenInit(900,600,0,0,"./img/Encuentra4.jpg")
let nubes = new Nubes(900,800,0,0,"./img/nubes.png")

updateCanvas()



