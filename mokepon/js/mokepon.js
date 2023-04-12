function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarmascotaJugador)
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function seleccionarmascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    const spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'            
    }else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo' 
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya' 
    }else if(inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = 'Langostelvis' 
    }else if(inputTucapalma.checked){
        spanMascotaJugador.innerHTML = 'Tucapalma' 
    }else if(inputPydos.checked){
        spanMascotaJugador.innerHTML = 'Pydos' 
    }else {
        alert("Selecciona una mascota")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let enemigoAleatorio = aleatorio(1,6)
    const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (enemigoAleatorio == 1 ){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }else if (enemigoAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo' 
    }else if(enemigoAleatorio == 3){
        spanMascotaEnemigo.innerHTML = 'Ratigueya' 
    }else if(enemigoAleatorio == 4){
        spanMascotaEnemigo.innerHTML = 'Langostelvis' 
    }else if(enemigoAleatorio == 5){
        spanMascotaEnemigo.innerHTML = 'Tucapalma' 
    }else {
        spanMascotaEnemigo.innerHTML = 'Pydos'
    }
}

window.addEventListener('load',iniciarJuego)