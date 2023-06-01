const sectionReiniciar = document.getElementById("reiniciar")
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

const sectionMensajes = document.getElementById("resultado")

let ataqueJugador 
let ataqueEnemigo

let vidasJugador = 3
let vidasEnemigo = 3

let mokepones = []

class Mokepon {
    constructor(nombre,foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
    }
}

let hipodoge = new Mokepon('hipodoge', '../assets/hipodoge.png', 3)
let capipepo = new Mokepon('capipepo', '../assets/capipepo.png', 3)
let ratigueya = new Mokepon('ratigueya', '../assets/ratigueya.png', 3)

mokepones.push(hipodoge, capipepo, ratigueya)

console.log(mokepones)

function iniciarJuego () { 
    sectionSeleccionarAtaque.style.display = "none"
    sectionReiniciar.style.display = "none"
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener("click", reloadGame)
}

function seleccionarMascotaJugador () { 
    sectionSeleccionarMascota.style.display = "none"

    sectionSeleccionarAtaque.style.display = "flex"



    if (document.getElementById("hipodoge").checked == true) {
        //alert("Usted ha seleccionado hipodoge")
        spanMascotaJugador.innerHTML = "Hipodoge"
    }
    else if (document.getElementById("capipepo").checked == true) {
        //alert("Usted ha seleccionado capipepo")
        spanMascotaJugador.innerHTML = "Capipepo"
    }
    else if(document.getElementById("ratigueya").checked == true) {
        //alert("Usted ha seleccionado ratigueya")
        spanMascotaJugador.innerHTML = "Ratigueya"
    }
    else {
        alert("Por favor selecciona tu mascota")
    }

    seleccionarMascotaEnemigo()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if(mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego () {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua () {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()    
}

function ataqueTierra () {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate () {
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal('FELICITACIONES. EL ENEMIGO YA NO TIENE VIDAS.')
    } else if (vidasJugador == 0) {
        crearMensajeFinal('LO SIENTO. YA NO TE QUEDAN VIDAS.')
    } 
}

function crearMensaje(resultado){

   // let notificacion = document.createElement("p")
    let nuevoAtaqueJugador = document.createElement("p")
    let nuevoAtaqueEnemigo = document.createElement("p")

    sectionMensajes.innerHTML=resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    // sectionMensajes.appendChild(notificacion)
    ataquesDelJugador.appendChild(nuevoAtaqueJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    

    //let parrafo = document.createElement('p')
    sectionMensajes.innerHTML = resultadoFinal


    botonFuego.disabled = true
    
    botonAgua.disabled = true
    
    botonTierra.disabled = true

    
    sectionReiniciar.style.display = "block"

}

function reloadGame() {
    location.reload()
}

window.addEventListener("load", iniciarJuego)