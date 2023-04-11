// Obtener las cartas del juego
const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijeras = document.getElementById("tijeras");

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(jugada) {
  let resultado = "";
  if (jugada == 1) {
    resultado = "Piedra 🪨";
  } else if (jugada == 2) {
    resultado = "Papel 📄";
  } else if (jugada == 3) {
    resultado = "Tijeras ✂️";
  } else {
    resultado = "NULO";
  }
  return resultado;
}

function elegir(jugada) {
  // Establecer la elección del jugador
  jugador = jugada;

  // Obtener la elección de la PC
  pc = aleatorio(1, 3);

  // Actualizar la interfaz de usuario con la elección del jugador
  if (jugador == 1) {
    piedra.classList.add("active");
    papel.classList.remove("active");
    tijeras.classList.remove("active");
  } else if (jugador == 2) {
    piedra.classList.remove("active");
    papel.classList.add("active");
    tijeras.classList.remove("active");
  } else if (jugador == 3) {
    piedra.classList.remove("active");
    papel.classList.remove("active");
    tijeras.classList.add("active");
  }

  // Actualizar la interfaz de usuario con la elección de la PC
  alert("Pc elige: " + eleccion(pc))
}