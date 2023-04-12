function iniciarJuego(){
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
    }
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarmascotaJugador)
}
window.addEventListener('load',iniciarJuego)