//codigo js
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1){
        resultado = "Piedra 🪨"
    } else if (jugada == 2){
        resultado = "Papel 📄"
    } else if (jugada == 3){
        resultado = "Tijeras ✂️"
    } else{
        resultado = "NULO"
    }
    return resultado
}
function elegir(jugada){
    jugador = jugada;
}
// 1 es piedra, 2 es papel, 3 es tijeras
let jugador = 0 
let pc = 0
let triunfos = 0
let perdidas = 0
while (triunfos < 3 && perdidas <3){
    pc= aleatorio(1,3)
    jugador = prompt("Elije: 1 para Piedra, 2 para papel, 3 para tijeras")
    // eleccion
    alert("Pc elige: " + eleccion(pc))
    alert("Tu eliges: " + eleccion(jugador))
    // Combate
    if(pc == jugador) {
        alert("Empate")
    }else if((jugador == 1 && pc == 3) || ( jugador == 2 && pc == 1) ||( jugador == 3 && pc == 2)){
        triunfos++
        alert("GANASTE! 🥳")
    } else{
        perdidas++
        alert("PERDISTE! 😢")
        }
}
alert (" Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")