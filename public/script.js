$(document).ready(function(){

    var cantidad = 1;

    $(".rayas").click(function(){
        $(".overlay").css("display", "inline");
        $(".overlay").css("z-index", "1");
    });

    $(".salir").click(function(){
        $(".overlay").css("display", "none");
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