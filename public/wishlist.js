function agregarCarrito(){
    console.log(this.dataset.id);
    //no sé como hacer para detectar cuando el producto ya está en carrito
    //si no eliminamos el producto de wishlist cuando ya se agrega al carrito
}

function mostrarProducto(){
    console.log(this.dataset.id); //como le mando el id del producto
    //window.location.replace("producto.html");
}

function eliminarDeWishlist(){
    console.log(this.dataset.id); 
    
}

var lista = [1,2,3,4,5,56,5,6,5,6,6,5,5]; // lista de productos, cada número es como si fuera un producto

$(document).ready(function(){

    var imagen;
    var nombreProducto;
    var idHeart;
    var contador = 1;

    if($(window).width() >= 300 && $(window).width() <= 481){
        for(var i = 0; i < lista.length; i++){  
            imagen = "https://i.ytimg.com/vi/IRCiKG3H5-k/maxresdefault.jpg"  //aqui pones la url de cada producto
            nombreProducto = "Pain"; //nombre de cada producto
            nombreFabricante = "Jiraiya"
            id = i; //id de cada producto
            $(".bloqueProducto").append("<div class='row centerVertically'><div class='col-4-10'><img class='width100 wishlistImagen' data-id='"+ id +"' src='"+ imagen +"'></div><div class='col-6-10'><h1 class='black'>"+ nombreProducto +"</h1><div class='espacioXS'></div><h1 class='black'>Fabricante: "+ nombreFabricante +"</h1></div></div><div class='row centerVertically'><div class='col-1-2'><img class='iconoLogin wishlistCart' data-id='"+ id +"' src='blueCart.png'></div><div class='col-1-2'><button class='wishlistEliminar' data-id='"+ id +"' type='button'>Eliminar</button></div></div><div class='row espacioXS'></div>");
        }

        var listaImagenes = document.getElementsByClassName("wishlistImagen");
        var listaHeart = document.getElementsByClassName("wishlistCart");
        var listaEliminar = document.getElementsByClassName("wishlistEliminar");

        for(var i in listaImagenes){
            listaImagenes[i].onclick = mostrarProducto;
        }

        for(var i in listaHeart){
            listaHeart[i].onclick = agregarCarrito;
        }

        for(var i in listaEliminar){
            listaEliminar[i].onclick = eliminarDeWishlist;
        }
    }
    else if($(window).width() >= 482 && $(window).width() <= 767){

        for(var i = 0; i < lista.length; i++){  
            imagen = "https://i.ytimg.com/vi/IRCiKG3H5-k/maxresdefault.jpg"  //aqui pones la url de cada producto
            nombreProducto = "Pain"; //nombre de cada producto
            nombreFabricante = "Jiraiya"
            id = i; //id de cada producto
            $(".bloqueProducto").append("<div class='row centerVertically'><div class='col-6-10'><img class='width100 wishlistImagen' data-id='"+ id +"' src='"+ imagen +"'></div><div class='col-4-10'><h1 class='black font125'>"+ nombreProducto +"</h1><div class='espacio2XS'></div><h1 class='black font125'>Fabricante: "+ nombreFabricante +"</h1></div></div><div class='row centerVertically'><div class='col-1-2'><img class='iconoLogin wishlistCart' data-id='"+ id +"' src='blueCart.png'></div><div class='col-1-2'><button class='wishlistEliminar' data-id='"+ id +"' type='button'>Eliminar</button></div></div><div class='row espacio2XS'></div>");
        }

        var listaImagenes = document.getElementsByClassName("wishlistImagen");
        var listaHeart = document.getElementsByClassName("wishlistCart");
        var listaEliminar = document.getElementsByClassName("wishlistEliminar");

        for(var i in listaImagenes){
            listaImagenes[i].onclick = mostrarProducto;
        }

        for(var i in listaHeart){
            listaHeart[i].onclick = agregarCarrito;
        }

        for(var i in listaEliminar){
            listaEliminar[i].onclick = eliminarDeWishlist;
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
            imagen = "https://i.ytimg.com/vi/IRCiKG3H5-k/maxresdefault.jpg"  //aqui pones la url de cada producto
            nombreProducto = "Pain"; //nombre de cada producto
            nombreFabricante = "Jiraiya"
            id = i; //id de cada producto
            $("." + nombreClase).append("<div class='col-1-2'><div class='bloqueProducto center'><div class='row centerVertically'><div class='col-1-2'><img class='width100 wishlistImagen' data-id='"+ id +"' src='"+ imagen +"'></div><div class='col-1-2'><h1 class='black font125'>"+ nombreProducto +"</h1><div class='espacio2XS'></div><h1 class='black font125'>Fabricante: "+ nombreFabricante +"</h1></div></div><div class='row centerVertically'><div class='col-1-2'><img data-id='"+ id +"' class='estrella wishlistCart' src='blueCart.png'></div><div class='col-1-2'><button data-id='"+ id +"' class='wishlistEliminar' type='button'>Eliminar</button></div></div></div></div>");
        }

        var listaImagenes = document.getElementsByClassName("wishlistImagen");
        var listaHeart = document.getElementsByClassName("wishlistCart");
        var listaEliminar = document.getElementsByClassName("wishlistEliminar");

        for(var i in listaImagenes){
            listaImagenes[i].onclick = mostrarProducto;
        }

        for(var i in listaHeart){
            listaHeart[i].onclick = agregarCarrito;
        }

        for(var i in listaEliminar){
            listaEliminar[i].onclick = eliminarDeWishlist;
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
            imagen = "https://i.ytimg.com/vi/IRCiKG3H5-k/maxresdefault.jpg"  //aqui pones la url de cada producto
            nombreProducto = "Pain"; //nombre de cada producto
            nombreFabricante = "Jiraiya"
            id = i; //id de cada producto
            $("." + nombreClase).append("<div class='col-1-2'><div class='bloqueProducto center'><div class='row centerVertically'><div class='col-1-2'><img class='width100 wishlistImagen' data-id='"+ id +"' src='"+ imagen +"'></div><div class='col-1-2'><h1 class='black font125'>"+ nombreProducto +"</h1><div class='espacio2XS'></div><h1 class='black font125'>Fabricante: "+ nombreFabricante +"</h1></div></div><div class='row centerVertically'><div class='col-1-2'><img data-id='"+ id +"' class='estrella wishlistCart' src='blueCart.png'></div><div class='col-1-2'><button data-id='"+ id +"' class='wishlistEliminar' type='button'>Eliminar</button></div></div></div></div>");
        }

        var listaImagenes = document.getElementsByClassName("wishlistImagen");
        var listaHeart = document.getElementsByClassName("wishlistCart");
        var listaEliminar = document.getElementsByClassName("wishlistEliminar");

        for(var i in listaImagenes){
            listaImagenes[i].onclick = mostrarProducto;
        }

        for(var i in listaHeart){
            listaHeart[i].onclick = agregarCarrito;
        }

        for(var i in listaEliminar){
            listaEliminar[i].onclick = eliminarDeWishlist;
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
            imagen = "https://i.ytimg.com/vi/IRCiKG3H5-k/maxresdefault.jpg"  //aqui pones la url de cada producto
            nombreProducto = "Pain"; //nombre de cada producto
            nombreFabricante = "Jiraiya"
            id = i; //id de cada producto
            $("." + nombreClase).append("<div class='col-1-2'><div class='bloqueProducto center'><div class='row centerVertically'><div class='col-1-2'><img class='width100 wishlistImagen' data-id='"+ id +"' src='"+ imagen +"'></div><div class='col-1-2'><h1 class='black font125'>"+ nombreProducto +"</h1><div class='espacio2XS'></div><h1 class='black font125'>Fabricante: "+ nombreFabricante +"</h1></div></div><div class='row centerVertically'><div class='col-1-2'><img data-id='"+ id +"' class='estrella wishlistCart' src='blueCart.png'></div><div class='col-1-2'><button data-id='"+ id +"' class='wishlistEliminar' type='button'>Eliminar</button></div></div></div></div>");
        }

        var listaImagenes = document.getElementsByClassName("wishlistImagen");
        var listaHeart = document.getElementsByClassName("wishlistCart");
        var listaEliminar = document.getElementsByClassName("wishlistEliminar");

        for(var i in listaImagenes){
            listaImagenes[i].onclick = mostrarProducto;
        }

        for(var i in listaHeart){
            listaHeart[i].onclick = agregarCarrito;
        }

        for(var i in listaEliminar){
            listaEliminar[i].onclick = eliminarDeWishlist;
        }
    }
});

$(window).on('resize', function(){
   location.reload(); 
});