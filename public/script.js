$(document).ready(function(){

    var cantidad = 1;

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

    $(".productoOfertas").click(function(){
        $(".oferta").css("display", "inline"); 
        $(".productoOfertas").css("display", "none");    
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