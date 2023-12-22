alert("BIENVENIDO AL JUEGO");

let star = ("SELECCIONA ACEPTAR");
alert (star);

function jugarJuego() {
    alert("¡Comienza el encuentro Barcelona vs Real Madrid! minuto 20 y el equipo de Xavi avanza en el terreno de juego y se acerca al arco con una ofensia muy rapida");

    let comienzo = prompt("Selecciona que equipo tendra mas opciones para anotar un gol al minuto 20\n1. Barcelona\n2. Real Madrid\n3 Ninguno");

    if (comienzo === '1') {
        BARCELONA();
    } else if (comienzo === '2') {
        REALMADRID();
    } else {
        alert("Selección no válida. Fin del juego.");
    }
 }
function BARCELONA() {
    alert("¡BIEN HECHO!");
    mostrarResultado("GOLAZO DE VOLEA");
}

function REALMADRID() {
    alert("¡PERDISTE!");
    mostrarResultado("BARCELONA siempre fue ofensivo en el ataque en el minuto 20");
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