var colores = document.getElementsByClassName("color");
var pixeles = document.getElementsByClassName("pixel");
var colorSeleccionado;
var paletaSeleccionada = document.getElementById("seleccionado");
var reset = document.getElementById("reset");


//for para recorrer la paleta de colores
for(var i = 0; i < colores.length; i++) {
    colores[i].addEventListener("click", colorPick);
    
}
//funcion para obtener el elemento en el que estoy haciendo click, con estilos
function colorPick (e) {
    colorSeleccionado = window.getComputedStyle(e.target).backgroundColor;
    paletaSeleccionada.style.backgroundColor = colorSeleccionado;
}
//for para recorrer todos los pixeles
for(var j = 0; j < pixeles.length; j++) {
    pixeles[j].addEventListener("click", paintool)
}
// funcion para agregar un estilo al html en este caso el color de fondo
function paintool(e) {
    e.target.style.backgroundColor = colorSeleccionado;
    
}

reset.addEventListener("click", function() {
    for (var i = 0; i < pixeles.length; i++) {
        pixeles[i].style.backgroundColor = "white";
    }
})