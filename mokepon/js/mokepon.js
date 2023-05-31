let ataqueJugador
let ataqueEnemigo 
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarmascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click' , reiniciarJuego)

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
        reiniciarJuego()
    }
    seleccionarMascotaEnemigo() 
}

function seleccionarMascotaEnemigo(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = "none"
    
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = "block"

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
    if(ataqueAleatorioEnemigo == '1'){
        ataqueEnemigo = 'FUEGO' 
    }else if (ataqueAleatorioEnemigo == '2'){
        ataqueEnemigo= 'AGUA' 
    }else{
        ataqueEnemigo = 'PLANTA' 
    }

    combate()
    
}


 function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal("Fin del juego ¡GANASTE!")
         
    }else if(vidasJugador == 0){
        crearMensajeFinal("Fin del juego ¡PERDISTE!")
         
    }
 }

let resultado


function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    // Fuego =1 , Agua = 2 , Tierra = 3
    
    if(ataqueEnemigo == ataqueJugador) {        
        resultado = "EMPATE"
    }else if((ataqueJugador == 'FUEGO' && ataqueEnemigo == 'PLANTA') ||  (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') ||  (ataqueJugador == 'PLANTA' && ataqueEnemigo == 'AGUA')){
        resultado = "GANASTE"
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        resultado = "PERDISTE"
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
         
    }
    crearMensaje()
    revisarVidas() 
}

function crearMensaje() {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    
    parrafo.innerHTML = 'Tu mascota atacó con '  + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' - ' + resultado
    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){

    let sectionBotonReiniciar = document.getElementById('reiniciar')
    sectionBotonReiniciar.style.display = "block"

    let sectionMensajes = document.getElementById('mensajes')
    let parrafo  = document.createElement('p')
    parrafo.innerHTML = (resultadoFinal)
    
    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true 
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true 
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
}

function reiniciarJuego(){
    location.reload()
}
window.addEventListener('load',iniciarJuego)