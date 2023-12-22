function jugarJuego() {
    alert("¡VAYA ESPECTACULO! que se vive en el CAMP NOU, y la pelota la tiene Federico Valverde dentro del area rival, y este es bueno disparando de larga distancia");

    let Disparo = prompt("Que debe hacer Valverde?\n1. Disparar ya\n2. Pasar el balon a Joselu\n3 Organizar juego desde atras");

    if (Disparo === '1') {
        Chutar();
    } else if (Disparo=== '2') {
        Pasar();
    } else if (Disparo === '3'){
        Organizar("Selección no válida. Fin del juego.");
    }
 }
function Chutar() {
    alert("CORRECTO");
    mostrarResultado("GOOOOOL DE VALVERDE EN EL MINUTO 50");
}

function Pasar() {
    alert("¡PERDISTE!");
    mostrarResultado("El es bueno disparando lejos del area");
}
function Organizar() {
    alert("¡PERDISTE!");
    mostrarResultado("El es bueno disparando lejos del area");
}

function mostrarResultado(titulo, mensaje) {
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    h1.textContent = titulo;
    h2.textContent = mensaje;
    document.body.appendChild(h1);
    document.body.appendChild(h2);
}
jugarJuego();