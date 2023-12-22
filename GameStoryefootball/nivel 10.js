const jugarJuego = () => {
    alert("Llegamos a los ultimos minutos de infarto con el marcador 2-2, y vemos que Anchelotti esta preparando sustituciones en el Real Madrid");

    do {
        const pregunta = "¿Quien deberia salir para mejorar el ataque?";
        const opciones = ["Rudiguer", "Nacho", "Joselu"];

        const respuestaUsuario = obtenerRespuesta(pregunta, opciones);
        const respuestaCorrecta = 3;

        verificarRespuesta(respuestaUsuario, respuestaCorrecta, "Joselu");

        const jugarNuevamente = confirm("¿Quieres intentarlo de nuevo?");
        if (!jugarNuevamente) {
            break; // 
        }
    } while (true); 
};

const obtenerRespuesta = (pregunta, opciones) => {
    return prompt(`${pregunta}\n1. ${opciones[0]}\n2. ${opciones[1]}\n3. ${opciones[2]}`);
};

const verificarRespuesta = (respuestaUsuario, respuestaCorrecta, respuestaCorrectaTexto) => {
    if (respuestaUsuario == respuestaCorrecta) {
        mostrarResultado("Respuesta Correcta", `¡Correcto! ${respuestaCorrectaTexto} es la respuesta correcta.`);
    } else {
        mostrarResultado("Respuesta Incorrecta", `La respuesta correcta es ${respuestaCorrectaTexto}.`);
    }
};

const mostrarResultado = (titulo, mensaje) => {
    alert(`${titulo}\n${mensaje}`);
};
jugarJuego();