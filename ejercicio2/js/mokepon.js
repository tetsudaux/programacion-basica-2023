let ataqueJugador 
let ataqueEnemigo

function iniciarJuego () {
     let botonMascotaJugador = document.getElementById("boton-mascota")
     botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

     let botonFuego = document.getElementById("boton-fuego")
     botonFuego.addEventListener('click', ataqueFuego)
     let botonAgua = document.getElementById("boton-agua")
     botonAgua.addEventListener('click', ataqueAgua)
     let botonTierra = document.getElementById("boton-tierra")
     botonTierra.addEventListener('click', ataqueTierra)

}

function seleccionarMascotaJugador () {

    let spanMascotaJugador = document.getElementById("mascota-jugador")


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
        spanMascotaEnemigo.innerHTML = 'Ratiqgueya'
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

    crearMensaje()
}

function crearMensaje(){
    let parrafo = document.createElement('p')
    parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ". La mascota del enemigo ataco con " + ataqueEnemigo + ""
}

window.addEventListener("load", iniciarJuego)