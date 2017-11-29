function mostrarProducto(){
    console.log(this.dataset.id); //como le mando el id del producto
    //window.location.replace("producto.html");
}

function eliminarDeCarrito(){
    console.log(this.dataset.id);

}

var lista = []; // lista de productos, cada número es como si fuera un producto

$(document).ready(function(){

    var imagen;
    var nombreProducto;
    var idHeart;
    var contador = 1;

    $.getJSON( "/getCart", { "status" : "status", "message" : "message", "data" : "data" } )
      .done(function( data, textStatus, jqXHR ) {
        lista=data.data;
        console.log(lista);

        if($(window).width() >= 300 && $(window).width() <= 481){
            for(var i = 0; i < lista.length; i++){
                imagen = lista.image;
                nombreProducto = lista.nameProduct
                nombreFabricante = "Maaloka"
                id = lista.idCart;
                $(".bloqueProducto").append("<div class='row centerVertically'><div class='col-4-10'><img data-id='"+ id +"' class='width100 carritoImagen' src='"+ imagen +"'></div><div class='col-6-10'><h1 class='black'>"+ nombreProducto +"</h1><div class='espacioXS'></div><h1 class='black'>Fabricante: "+ nombreFabricante +"</h1></div></div><div class='row'><div class='col-1-1 center'><button class='carritoEliminar' data-id='"+ id +"'>Eliminar</button></div></div><div class='row espacio2XS'></div>");
            }

            var listaImagenes = document.getElementsByClassName("carritoImagen");
            var listaEliminar = document.getElementsByClassName("carritoEliminar");

            for(var i in listaImagenes){
                listaImagenes[i].onclick = mostrarProducto;
            }

            for(var i in listaEliminar){
                listaEliminar[i].onclick = eliminarDeCarrito;
            }
        }
        else if($(window).width() >= 482 && $(window).width() <= 767){

            for(var i = 0; i < lista.length; i++){
              imagen = lista.image;
              nombreProducto = lista.nameProduct
              nombreFabricante = "Maaloka"
              id = lista.idCart;
                $(".bloqueProducto").append("<div class='row centerVertically'><div class='col-6-10'><img data-id='"+ id +"' class='width100 carritoImagen' src='"+ imagen +"'></div><div class='col-4-10'><h1 class='black font125'>"+ nombreProducto +"</h1><div class='espacio2XS'></div><h1 class='black font125'>Fabricante: "+ nombreFabricante +"</div></div><div class='row'><div class='col-1-1 center'><button class='carritoEliminar' data-id='"+ id +"'>Eliminar</button></div></div><div class='row espacio2XS'></div>");
            }

            var listaImagenes = document.getElementsByClassName("carritoImagen");
            var listaEliminar = document.getElementsByClassName("carritoEliminar");

            for(var i in listaImagenes){
                listaImagenes[i].onclick = mostrarProducto;
            }

            for(var i in listaEliminar){
                listaEliminar[i].onclick = eliminarDeCarrito;
            }
        }
        else if($(window).width() >= 768 && $(window).width() <= 991){
            var baseNombreClase = "renglonProductosSM";
            var nombreClase = baseNombreClase;

            for(var i = 0; i < lista.length; i++){
                if( i % 2 == 0){
                    nombreClase = baseNombreClase + contador;
                    $(".zonaProductosSM").append("<div class='row "+ nombreClase +"'></div><div class='row espacio2XS'></div>");
                    contador++;
                }
                imagen = lista.image;
                nombreProducto = lista.nameProduct
                nombreFabricante = "Maaloka"
                id = lista.idCart;
                $("." + nombreClase).append("<div class='col-1-2'><div class='bloqueProducto center'><div class='row centerVertically'><div class='col-4-10'><img data-id='"+ id +"' class='width100 carritoImagen' src='"+ imagen +"'></div><div class='col-6-10'><h1 class='black'>"+ nombreProducto +"</h1><div class='espacio2XS'></div><h1 class='black'>Fabricante: "+ nombreFabricante +"</h1></div></div><div class='row'><div class='col-1-1 center'><button class='carritoEliminar' data-id='"+ id +"'>Eliminar</button></div></div></div></div>");
            }

            var listaImagenes = document.getElementsByClassName("carritoImagen");
            var listaEliminar = document.getElementsByClassName("carritoEliminar");

            for(var i in listaImagenes){
                listaImagenes[i].onclick = mostrarProducto;
            }

            for(var i in listaEliminar){
                listaEliminar[i].onclick = eliminarDeCarrito;
            }
        }
        else if($(window).width() >= 992 && $(window).width() <= 1199){
            var baseNombreClase = "renglonProductosMD";
            var nombreClase = baseNombreClase;

            for(var i = 0; i < lista.length; i++){
                if( i % 2 == 0){
                    nombreClase = baseNombreClase + contador;
                    $(".zonaProductosMD").append("<div class='row "+ nombreClase +"'></div><div class='row espacio2XS'></div>");
                    contador++;
                }
                imagen = lista.image;
                nombreProducto = lista.nameProduct
                nombreFabricante = "Maaloka"
                id = lista.idCart;
                $("." + nombreClase).append("<div class='col-1-2'><div class='bloqueProducto center'><div class='row centerVertically'><div class='col-1-2'><img data-id='"+ id +"' class='width100 carritoImagen' src='"+ imagen +"'></div><div class='col-1-2'><h1 class='black font125'>"+ nombreProducto +"</h1><div class='espacio2XS'></div><h1 class='black font125'>Fabricante: "+ nombreFabricante +"</h1></div></div><div class='row'><div class='col-1-1 center'><button class='carritoEliminar' data-id='"+ id +"'>Eliminar</button></div></div></div></div>");
            }

            var listaImagenes = document.getElementsByClassName("carritoImagen");
            var listaEliminar = document.getElementsByClassName("carritoEliminar");

            for(var i in listaImagenes){
                listaImagenes[i].onclick = mostrarProducto;
            }

            for(var i in listaEliminar){
                listaEliminar[i].onclick = eliminarDeCarrito;
            }
        }
        else if($(window).width() >= 1200){

            var baseNombreClase = "renglonProductosLG";
            var nombreClase = baseNombreClase;

            for(var i = 0; i < lista.length; i++){
                if( i % 2 == 0){
                    nombreClase = baseNombreClase + contador;
                    $(".zonaProductosLG").append("<div class='row bloqueLG center "+ nombreClase +"'></div><div class='row espacio2XS'></div>");
                    contador++;
                }
                imagen = lista.image;
                nombreProducto = lista.nameProduct
                nombreFabricante = "Maaloka"
                id = lista.idCart;
                $("." + nombreClase).append("<div class='col-1-2'><div class='bloqueProducto center'><div class='row centerVertically'><div class='col-1-2'><img data-id='"+ id +"' class='width100 carritoImagen' src='"+ imagen +"'></div><div class='col-1-2'><h1 class='black font125'>"+ nombreProducto +"</h1><div class='espacio2XS'></div><h1 class='black font125'>Fabricante: "+ nombreFabricante +"</div></div><div class='row'><div class='col-1-1 center'><button class='carritoEliminar' data-id='"+ id +"'>Eliminar</button></div></div></div></div>");
            }

            var listaImagenes = document.getElementsByClassName("carritoImagen");
            var listaEliminar = document.getElementsByClassName("carritoEliminar");

            for(var i in listaImagenes){
                listaImagenes[i].onclick = mostrarProducto;
            }

            for(var i in listaEliminar){
                listaEliminar[i].onclick = eliminarDeCarrito;
            }
        }
      })
      .fail(function( jqXHR, textStatus, errorThrown ) {
        if ( console && console.log ) {
          console.log( "Algo ha fallado: " +  textStatus );
        }
      });
});

$(window).on('resize', function(){
   location.reload();
});
