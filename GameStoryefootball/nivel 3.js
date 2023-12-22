const jugarJuego = () => {
    alert("¡La pelota sigue en juego y Gundogan se acredita de ella como una version de Messi; pero tras tanta magia se apago la barita; AHORA tiene la pelota Camavinga lanza un pase largo a Kross en la mitad de cancha!");

    const respuesta1 = prompt("¿Qué debe hacer Toni Kross con el balon?\n1. Dar un pase de tres dedos a Raphina\n2. disparar al arco\n3. lanzar un centro al area rival ");

    if (respuesta1 === '3') {
        mostrarResultado("Respuesta Correcta", "¡Bien hecho!");
    } else {
        mostrarResultado("Respuesta Incorrecta", "La respuesta correcta era LANZAR UN CENTRO AL AREA RIVAL.");
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