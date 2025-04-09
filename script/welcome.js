const texto = document.getElementsByClassName("h2").item();

window.addEventListener("load",function(event){
    event.preventDefault();
    if(this.localStorage.getItem("nombre")!=null){
        texto.innerHTML = `Hola, ${this.localStorage.getItem("nombre")} bienvenido/a de nuevo
        <br/>
        por favor ve al index e ingresa tu nombre`;
    }
})