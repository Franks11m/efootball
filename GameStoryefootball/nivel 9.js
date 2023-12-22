function jugarJuego() {
    alert("¡SEÑORAS Y SEÑORES! se viene un penal para el Barcelona y al parecer veo que esta con la pelota Lewandowski");

    let jugador = prompt("¿A donde crees que deberia disparar Robert Lewandowski?\n1. Hacia el posted\n2. Hacia angulo derecho\n3 Hacia el larguero");

    if (jugador === '1') {
        Posted();
    } else if (jugador=== '2') {
        Angulo();
    } else if (jugador === '3'){
        Larguero("Selección no válida. Fin del juego.");
    }
 }
function Posted() {
    alert("PERDISTE");
    mostrarResultado("Barcelona nesecita ese gol");
}

function Angulo() {
    alert("¡CORRECTO!");
    mostrarResultado("GOOOOOOOOOOL de BARCELONA y el macador se empareja nuevamente 2-2");
}
function Larguero() {
    alert("¡PERDISTE!");
    mostrarResultado("Barcelona nesesita ese gol");
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