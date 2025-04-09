window.addEventListener("load", function () {
    const texto = document.getElementsByTagName("h2")[0];
    const nombre = localStorage.getItem("nombre");

    if (nombre) {
        texto.innerHTML = `Hola, ${nombre}, bienvenido/a de nuevo<br/>¡Nos alegra verte!`;
    }
});
