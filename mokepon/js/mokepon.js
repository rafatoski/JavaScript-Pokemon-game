let ataqueJugador
let ataqueEnemigo 

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarmascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)

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

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'PLANTA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorioEnemigo = aleatorio(1,3)
    const spanAtaqueEnemigo = document.getElementById('ataque-enemigo')
    if(ataqueAleatorioEnemigo == '1'){
        ataqueEnemigo = 'FUEGO' 
    }else if (ataqueAleatorioEnemigo == '2'){
        ataqueEnemigo= 'AGUA' 
    }else{
        ataqueEnemigo = 'PLANTA' 
    }

    combate()
    crearMensaje()
}

let resultadoPendiente

function combate(){
    // Fuego =1 , Agua = 2 , Tierra = 3
    if(ataqueEnemigo == ataqueJugador) {
        //empate
        console.log('empate')
        resultadoPendiente = 'Empate'
    }else if((ataqueJugador == 'FUEGO' && ataqueEnemigo == 'PLANTA') ||  (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') ||  (ataqueJugador == 'PLANTA' && ataqueEnemigo == 'AGUA')){ 
        // ganaste
        console.log('ganaste')
        resultadoPendiente = 'Ganaste'
    } else {
        //perdiste
        console.log('perdiste')
        resultadoPendiente = 'Perdiste'
    }

}


function crearMensaje() {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con '  + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + (parrafo.innerHTML =(' ' + resultadoPendiente))

    sectionMensajes.appendChild(parrafo)
}


window.addEventListener('load',iniciarJuego)