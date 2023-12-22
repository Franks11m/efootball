const jugarJuego = () => {
    alert("¡QUE CENTRO ESPECTACULAR DE KROOS! para Bellingham y dispara");

    const respuesta1 = prompt("¿Que lado del arco debe disparar Bellingham, para igualar el marcador?\n1. Al posted derecho\n2. Al posted izquierdo\n3. Hacia el centro ");

    if (respuesta1 === '2') {
        mostrarResultado("Respuesta Correcta", "¡Bien hecho!");
    } else {
        mostrarResultado("Respuesta Incorrecta", "La respuesta correcta era Al POSTED IZQUIERDO.");
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