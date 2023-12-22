
alert("Señores y Señoras vamos a comenzar el 2do tiempo");

function jugarJuego() {
    alert("¡Comienza la 2da parte!");

    let comienzo = prompt("¿A que equipo le toca mover el balon del medio?\n1. Barcelona\n2. Real Madrid\n3 Ninguno");

    if (comienzo === '1') {
        BARCELONA();
    } else if (comienzo=== '2') {
        REALMADRID();
    } else {
        alert("Selección no válida. Fin del juego.");
    }
 }
function BARCELONA() {
    alert("¡PERDISTE!");
    mostrarResultado("FUE EL EQUIPO QUE MOVIO EL BALON EN EL 1ER TIEMPO");
}

function REALMADRID() {
    alert("¡BIEN HECHO!");
    mostrarResultado("¡Y CONTINUMOS ESTE PARTIDO! el Real Madrid contiua el juego dando una serie de toques impresionantes");
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