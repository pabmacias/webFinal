$(document).ready(function(){

    var cantidad = 1;

    /*$.getJSON( "/maaloka/kitchen", { "status" : "valor1", "message" : "valor2", "listaProductos" : "valor3" } )
        .done(function( data, textStatus, jqXHR ) {
            if ( console && console.log ) {
                console.log( "La solicitud se ha completado correctamente." );
            }
        })
        .fail(function( jqXHR, textStatus, errorThrown ) {
            if ( console && console.log ) {
                console.log( "Algo ha fallado: " +  textStatus );
            }
    });*/
    //console.log($(window).width());

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
        $(".nombreOfertasTb").height(((imagenOferta - imagenProducto) / 2) - 1);
    });

    $("#recomendaciones").click(function(){
        var imagenRecomendaciones = $("#recomendaciones").height();
        $(".productoRecomendacionesTb").height($("#recomendaciones").height());
        $(".productoRecomendacionesTb").height($("#recomendaciones").height());
        $(".imagenRecomendaciones").css("display", "none"); 
        $(".productoRecomendacionesTb").css("display", "inline");
        var imagenProducto = $("#imagenRecomendacionesTb1").height();
        $(".nombreRecomendacionesTb").height(((imagenRecomendaciones - imagenProducto) / 2) - 1);
    });

    $(".productoOfertas").click(function(){
        $(".oferta").css("display", "inline"); 
        $(".productoOfertas").css("display", "none");    
    });

    $(".productoOfertasTb").click(function(){
        $(".imagenOferta").css("display", "inline");
        $(".productoOfertasTb").css("display", "none");    
    });

    $(".productoRecomendacionesTb").click(function(){
        $(".imagenRecomendaciones").css("display", "inline");
        $(".productoRecomendacionesTb").css("display", "none");    
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

    if($(window).width() >= 768 && $(window).width() <= 991){
        alturaOferta = $("#ofertaSM").height();
        alturaProducto = $("#imagenOfertaSM").height();
        $(".nombreOfertasSM").height( (alturaOferta - alturaProducto) / 2);

        alturaOferta = $("#recomendacionesSM").height();
        alturaProducto = $("#imagenRecomendacionesSM").height();
        $(".nombreRecomendacionesSM").height( (alturaOferta - alturaProducto) / 2);
    }
    else if($(window).width() >= 992 && $(window).width() <= 1199){
        alturaOferta = $("#ofertaMD").height();
        alturaProducto = $("#imagenOfertaMD").height();
        $(".nombreOfertasMD").height( (alturaOferta - alturaProducto) / 2);

        alturaOferta = $("#recomendacionesMD").height();
        alturaProducto = $("#imagenRecomendacionesMD").height();
        $(".nombreRecomendacionesMD").height( (alturaOferta - alturaProducto) / 2);
    }
});

$(window).on('resize', function(){
    if($(this).width() >= 768 && $(this).width() <= 991){
        alturaOferta = $("#ofertaSM").height();
        alturaProducto = $("#imagenOfertaSM").height();
        $(".nombreOfertasSM").height( (alturaOferta - alturaProducto) / 2);

        alturaOferta = $("#recomendacionesSM").height();
        alturaProducto = $("#imagenRecomendacionesSM").height();
        $(".nombreRecomendacionesSM").height( (alturaOferta - alturaProducto) / 2);
    }
    else if($(window).width() >= 992 && $(window).width() <= 1199){
        alturaOferta = $("#ofertaMD").height();
        alturaProducto = $("#imagenOfertaMD").height();
        $(".nombreOfertasMD").height( (alturaOferta - alturaProducto) / 2);

        alturaOferta = $("#recomendacionesMD").height();
        alturaProducto = $("#imagenRecomendacionesMD").height();
        $(".nombreRecomendacionesMD").height( (alturaOferta - alturaProducto) / 2);
    }
});