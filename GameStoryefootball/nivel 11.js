const jugarJuego = () => {
    alert("Se efectua el cammbio y sale el numero 9 Joselu y entra el numero 11 Rodrygo, se va a terminar el partido el partido tras ultimo tiro libre del Real Madrid al minuton 90 ya a Barcelona no tine esperanzas de ganar este ecuentro");

    const respuesta1 = prompt("¿Quien debe lanzar el tiro libre?\n1. Luka Modric\n2. Courtois\n3. Anchelotti");

    if (respuesta1 === '1') {
        mostrarResultado("Y LANZA GOOOOL DEL REAL MADRID campaña perfacta y se acredita del titulo de la uffa champions league");
    } else {
        mostrarResultado("Respuesta Incorrecta", "La respuesta correcta era LUKA MODIC.");
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