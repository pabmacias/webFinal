function agregarCarrito(){
    console.log(this.dataset.id); //como le mando el id del producto

  	$.post( "/addCart", { "idProduct" : this.dataset.id }, null, "json" )
      .done(function( data, textStatus, jqXHR ) {
          if ( console && console.log ) {
  					console.log(data);
  					console.log(textStatus);
  					console.log(jqXHR);
              console.log( "La solicitud se ha completado correctamente." );
          }
      })
      .fail(function( jqXHR, textStatus, errorThrown ) {
          if ( console && console.log ) {
              console.log( "La solicitud a fallado: " +  textStatus);
          }
  	});
}

function agregarWishlist(){
  console.log(this.dataset.id);
  if($(this).attr("src") == "heart.png"){
    $(this).attr("src", "blueHeart.png");
    //funcion para agregar a wishlist
  }
  else{
    $(this).attr("src", "heart.png");
    //funcion para eliminar de wishlist
  }

  $.post( "/addWishlist", { "idProduct" : this.dataset.id }, null, "json" )
    .done(function( data, textStatus, jqXHR ) {
        if ( console && console.log ) {
          console.log(data);
          console.log(textStatus);
          console.log(jqXHR);
            console.log( "La solicitud se ha completado correctamente." );
        }
    })
    .fail(function( jqXHR, textStatus, errorThrown ) {
        if ( console && console.log ) {
            console.log( "La solicitud a fallado: " +  textStatus);
        }
  });

}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var idP = getParameterByName('idProduct')

//console.log(foo);

$(document).ready(function(){
  $.post( "/maaloka/getProduct", { "idProduct" : idP }, null, "json" )
    .done(function( data, textStatus, jqXHR ) {
        if ( console && console.log ) {
          console.log(data);
          console.log(textStatus);
          console.log(jqXHR);
            console.log( "La solicitud se ha completado correctamente." );

            var oferta;
            var imagen;
            var nombreProducto;
            var precio;
            var descripcion;
            var detalles;
            var nombreFabricante;
            var id;

            if($(window).width() >= 300 && $(window).width() <= 481){

            }
            else if($(window).width() >= 482 && $(window).width() <= 767){

            }
            else if($(window).width() >= 768 && $(window).width() <= 991){

            }
            else if($(window).width() >= 992 && $(window).width() <= 1199){

                oferta = data.data[0].sale;
                imagen = data.data[0].image;
                nombreProducto = data.data[0].nameProduct;
                precio = data.data[0].cost;
                descripcion = data.data[0].description;
                detalles = "Posee el Rinnegan";
                nombreFabricante = "Maaloka"
                id = data.data[0].idProduct;
                $(".zonaProductosMD").append("<div class='bloqueProducto center'><h1 class='descuento'>"+ oferta +"%</h1><img class='width100' src='"+ imagen +"'><div class='row espacio4XS'></div><div class='row'><div class='col-7-10'><h1 class='font200 floatLeft'>"+ nombreProducto +"</h1></div><div class='col-3-10'><h1 class='cantidad font250'>$"+ precio.toFixed(2) +"</h1></div></div><div class='row espacio2XS'></div><h1 class='floatLeft font150'>Descripcion: "+ descripcion +"</h1><div class='row espacio2XS'></div><h1 class='floatLeft font150'>Detalles: "+ detalles +"</h1><div class='row espacio2XS'></div><h1 class='floatLeft font150'>Nombre del fabricante: "+ nombreFabricante +"</h1><div class='row espacio2XS'></div><div class='row inline'><div class='col-1-5'><img class='width100 productoCart' data-id='"+ id +"' src='blueCart.png'></div><div class='col-1-5 floatRight'><img class='width100 productoHeart' data-id='"+ id +"'' src='blueHeart.png'></div></div></div>");

                var listaHeart = document.getElementsByClassName("productoHeart");
                var listaCart = document.getElementsByClassName("productoCart");

                for(var i in listaHeart){
                    listaHeart[i].onclick = agregarWishlist;
                }

                for(var i in listaCart){
                    listaCart[i].onclick = agregarCarrito;
                }
            }
            else if($(window).width() >= 1200){

              oferta = data.data[0].sale;
              imagen = data.data[0].image;
              nombreProducto = data.data[0].nameProduct;
              precio = data.data[0].cost;
              descripcion = data.data[0].description;
              detalles = "Posee el Rinnegan";
              nombreFabricante = "Maaloka"
              id = data.data[0].idProduct;
                $(".zonaProductosLG").append("<div class='bloqueProducto center'><h1 class='descuento'>"+ oferta +"%</h1><img class='width100' src='"+ imagen +"'><div class='row espacio4XS'></div><div class='row'><div class='col-7-10'><h1 class='font200 floatLeft'>"+ nombreProducto +"</h1></div><div class='col-3-10'><h1 class='cantidad font250'>$"+ precio.toFixed(2) +"</h1></div></div><div class='row espacio2XS'></div><h1 class='floatLeft font150'>Descripcion: "+ descripcion +"</h1><div class='row espacio2XS'></div><h1 class='floatLeft font150'>Detalles: "+ detalles +"</h1><div class='row espacio2XS'></div><h1 class='floatLeft font150'>Nombre del fabricante: "+ nombreFabricante +"</h1><div class='row espacio2XS'></div><div class='row inline'><div class='col-1-5'><img class='width100 productoCart' data-id='"+ id +"' src='blueCart.png'></div><div class='col-1-5 floatRight'><img class='width100 productoHeart' data-id='"+ id +"' src='blueHeart.png'></div></div></div>");

                var listaHeart = document.getElementsByClassName("productoHeart");
                var listaCart = document.getElementsByClassName("productoCart");

                for(var i in listaHeart){
                    listaHeart[i].onclick = agregarWishlist;
                }

                for(var i in listaCart){
                    listaCart[i].onclick = agregarCarrito;
                }
            }
        }
    })
    .fail(function( jqXHR, textStatus, errorThrown ) {
        if ( console && console.log ) {
            console.log( "La solicitud a fallado: " +  textStatus);
        }
  });

});

$(window).on('resize', function(){
   location.reload();
});
