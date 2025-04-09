let btnGuardarNombre = document.getElementsByClassName("btn btn-primary mb-3")
let nombre = document.getElementById("nombre");

    btnGuardarNombre.addEventListener("click", function(event){
        event.preventDefault();
        inputName=txtNombre.value
        localStorage.setItem( "nombre",inputName)
    });

if(localStorage.getItem("nombre")!=null){
    let nombre = localStorage.getItem("nombre");
    encabezado1.innerText = `Hola ${nombre} bienvenido/a de nuevo`;
} else{
    localStorage.setItem("nombre",inputName); 
}


  