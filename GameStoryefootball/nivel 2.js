
function jugarJuego() {
    alert("Tras anotar el gol, Barcelona da el primer golpe en el partido; se avecina una llegada mas al area del Mandrid con multiples suseciones de pase");

    let jugador = prompt("¿Qué jugador se gambetea a mas de 4 jugadores al mismó tiempo para llegar al área rival?\n1. Gundogan\n2. Bellingham\n3 Courtois");

    if (jugador === '1') {
        Gundogan();
    } else if (jugador=== '2') {
        Bellingham();
    } else if (jugador === '3'){
        Courtois("Selección no válida. Fin del juego.");
    }
 }
function Gundogan() {
    alert("CORRECTO");
    mostrarResultado("Corré con en balón como un magó,se nota que la defensa del Real Madrid no se encuentra cómoda en el terreno de juego");
}

function Bellingham() {
    alert("¡PERDISTE!");
    mostrarResultado("Es un jugador del Real Madrid");
}
function Courtois() {
    alert("¡PERDISTE!");
    mostrarResultado("Es un jugador del Real Madrid");
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