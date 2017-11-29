var lista = [1,2,3,4]
console.log(lista.length);

$(document).ready(function(){
	if($(window).width() >= 1200){
        /* <div class="col-1-5 producto center">
                <img class="imagenOfertas" src="zapato.jpg">
                <p class="nombreProducto center">Nombre</p>
                <div class="nombreProducto2 row">
                    <div class="col-1-2">
                        <p class="pInline">$0.00</p>
                    </div>
                    <div class="col-1-2 center">
                        <img class="heartProductoLG" src="heart.png">
                    </div>
                </div>
            </div>*/
        var producto = document.createElement("DIV");
        producto.className += "col-1-5";
        producto.className += "producto"; 
        producto.className += "center";
        var imagenProducto = document.createElement("img");
        imagenProducto.className += "imagenOfertas";
        var nombreProducto = document.createElement("p");
        nombreProducto.className += "nombreProducto";
        nombreProducto.className += "center";
        var nombreProducto2 = document.createElement("div");
        nombreProducto2.className += "nombreProducto2";
        nombreProducto2.className += "row";
        var divNombreProducto2 = document.createElement("div");
        divNombreProducto2.className += "col-1-2";
        var precio = document.createElement("p");
        precio.className += "pInline";
        var divNombreProducto2center = document.createElement("div");
        divNombreProducto2center.className += "col-1-2";
        divNombreProducto2center.className += "center";
        var heart = document.createElement("img");
        heart.className += "heartProductoLG";
    }
});