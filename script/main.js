const txtNombre = document.getElementById("insertaNombre")
const btnGuardarNombre = document.getElementById("btnGuardar");

    btnGuardarNombre.addEventListener("click", function(event){
        event.preventDefault();
        txtNombre.value = txtNombre.value.trim()
        localStorage.setItem( "nombre",insertaNombre.value)

        if (insertaNombre.value){
            localStorage.setItem("Nombre", insertaNombre.value)
        }
    });