function iniciarJuego () {
     let botonMascotaJugador = document.getElementById("boton-mascota");
     botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

}

function seleccionarMascotaJugador () {

    if (document.getElementById("hipodoge").checked == true) {
        alert("Usted ha seleccionado hipodoge")
    }
    else if (document.getElementById("capipepo").checked == true) {
        alert("Usted ha seleccionado capipepo")
    }
    else if(document.getElementById("ratigueya").checked == true) {
        alert("Usted ha seleccionado ratigueya")
    }
    else {
        alert("Por favor selecciona tu mascota")
    }
}


window.addEventListener("load", iniciarJuego)