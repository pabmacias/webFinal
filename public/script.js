$(document).ready(function(){
    $(".rayas").click(function(){
        $(".overlay").css("display", "inline");
        $(".overlay").css("z-index", "1");
    });

    $(".overlay").click(function(){
        $(".overlay").css("display", "none");
    });

    $(".oferta").mousemove(function(){
    	console.log("hola");
    });

});