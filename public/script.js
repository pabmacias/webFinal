$(document).ready(function(){

    var cantidad = 1;

    $.getJSON( "/maaloka/kitchen", { "status" : "valor1", "message" : "valor2", "listaProductos" : "valor3" } )
        .done(function( data, textStatus, jqXHR ) {
            if ( console && console.log ) {
                console.log( "La solicitud se ha completado correctamente." );
            }
        })
        .fail(function( jqXHR, textStatus, errorThrown ) {
            if ( console && console.log ) {
                console.log( "Algo ha fallado: " +  textStatus );
            }
    });

    $(".rayas").click(function(){
        $(".overlay").css("display", "inline");
        $(".overlay").css("z-index", "1");
    });

    $(".overlay").click(function(){
        $(".overlay").css("display", "none");
    });

    $(".oferta").click(function(){
        $(".oferta").css("display", "none"); 
        $(".productoOfertas").css("display", "inline");
    });

    $("#oferta").click(function(){
        var imagenOferta = $("#oferta").height();
        $(".productoOfertasTb").height($("#oferta").height());
        $(".productoOfertasTb").height($("#oferta").height());
        $(".imagenOferta").css("display", "none"); 
        $(".productoOfertasTb").css("display", "inline");
        var imagenProducto = $("#imagenOfertasTb1").height();
        $(".nombreOfertasTb").height((imagenOferta - imagenProducto) / 2);
    });

    $(".productoOfertas").click(function(){
        $(".oferta").css("display", "inline"); 
        $(".productoOfertas").css("display", "none");    
    });

    $(".productoOfertasTb").click(function(){
        $(".imagenOferta").css("display", "inline");
        $(".productoOfertasTb").css("display", "none");    
    });

    $(".recomendaciones").click(function(){
        $(".recomendaciones").css("display", "none"); 
        $(".productoRecomendaciones").css("display", "inline");
    });

    $(".productoRecomendaciones").click(function(){
        $(".recomendaciones").css("display", "inline"); 
        $(".productoRecomendaciones").css("display", "none");    
    });

    $("#mas").click(function(){
        cantidad++;
        document.getElementById("cantidadProducto").innerHTML = cantidad;
    });

    $("#menos").click(function(){
        if(cantidad > 1){
            cantidad--;
            document.getElementById("cantidadProducto").innerHTML = cantidad;
        }
    });
});