const jugarJuego = () => {
    alert("El resultado es 1-2 y el Real madrid toma la delantera en el marcador, aunque se viene un contrataque veloz de Bacelona y ¡FALTA! dentro del area rival");

    const respuesta1 = prompt("¿Que tipo de tiro es para el Barcelona?\n1. Tiro Corner\n2. Tiro desde afuera\n3. Tiro penal ");

    if (respuesta1 === '3') {
        mostrarResultado("Respuesta Correcta", "¡Bien hecho!");
    } else {
        mostrarResultado("Respuesta Incorrecta", "La respuesta correcta era TIRO PENAL.");
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