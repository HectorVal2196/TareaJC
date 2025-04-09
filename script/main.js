const txtNombre = document.getElementById("insertaNombre");
const btnGuardarNombre = document.getElementById("btnGuardar");

btnGuardarNombre.addEventListener("click", function(event) {
    event.preventDefault();

    // Eliminar espacios del input
    const nombreLimpio = txtNombre.value.trim();

    if (nombreLimpio) {
        // Guardar en localStorage
        localStorage.setItem("nombre", nombreLimpio);
        console.log("Nombre guardado:", nombreLimpio);
    } else {
        console.log("No se ingresó un nombre válido.");
    }
});
