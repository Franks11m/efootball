 
 const jugarJuego = () => {
    alert("¡GOOOOOOOL DE BELLINGHAM, el marcador es parejo al minuto 45 y al parecer se nota el cansancio de los jugadores del Barcelona !");

    const respuesta1 = prompt("¿Que deberia hacer el DT del BARCELONA?\n1. organizar una defenza mas firme\n2. sustituir un jugador al minuto 45\n3. esperar que se acabe el 1er tiempo");

    switch (respuesta1) {
        case '3':
            mostrarResultado("Respuesta Correcta", "¡Excelente! Se termino el segundo periodo con un resultado de 1-1 veremos como acabara esto en la segunda parte");
            break;
        default:
            mostrarResultado("Respuesta Incorrecta", "La repuesa correcta es ESPERAR A QUE TERMINE EL 1ER TIEMPO.");
            break; 
    }
};


const mostrarResultado = (titulo, mensaje) => {

    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");

    h1.textContent = titulo;
    h2.textContent = mensaje;

    document.body.appendChild(h1);
    document.body.appendChild(h2);
};
jugarJuego();