let ataqueJugador 

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
    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if(ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratiqgueya'
    }
}

function ataqueFuego () {
    ataqueJugador = 'FUEGO'
    alert(ataqueJugador)
}

function ataqueAgua () {
    ataqueJugador = 'AGUA'
    alert(ataqueJugador)
}

function ataqueTierra () {
    ataqueJugador = 'TIERRA'
    alert(ataqueJugador)
}

window.addEventListener("load", iniciarJuego)