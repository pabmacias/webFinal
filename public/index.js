function agregarWishlist(){
	if($(this).attr("src") == "heart.png"){
		$(this).attr("src", "blueHeart.png");
		//funcion para agregar a wishlist
	}
	else{
		$(this).attr("src", "heart.png");
		//funcion para eliminar de wishlist	
	}
}

function mostrarProducto(){
    //console.log(this.dataset.id); como le mando el id del producto
    window.location.replace("producto.html");
}

$(document).ready(function(){
	if($(window).width() >= 1200){
        var listaOfertas = document.getElementsByClassName("productoOfertasLG");
        var listaRecomendaciones = document.getElementsByClassName("productoRecomendacionesLG");
        var precio = 3009;

        for(var i = 0; i < listaOfertas.length; i++){
            listaOfertas[i].setAttribute("data-id", i);
        }

        for(var i = 0; i < listaOfertas.length; i++){
            listaRecomendaciones[i].setAttribute("data-id", i);
        }

        $("#imagenOfertaLG").attr("src", "https://pbs.twimg.com/media/CulSlFDWYAAXkoT.jpg");
        document.getElementById("nombreProductoOfertaLG").innerHTML = "Naruto Uzumaki";
        document.getElementById("precioProductoOfertaLG").innerHTML = "$" + precio.toFixed(2);
        document.getElementById("heartProductoOfertaLG").onclick = agregarWishlist;
        document.getElementById("imagenOfertaLG").onclick = mostrarProducto;

        $("#imagenOfertaLG2").attr("src", "https://vignette.wikia.nocookie.net/onepiece/images/a/a4/Sombrero_de_Paja_Luffy_regresa.png/revision/latest?cb=20120619000734&path-prefix=es");
        document.getElementById("nombreProductoOfertaLG2").innerHTML = "Monkey D. Luffy";
        document.getElementById("precioProductoOfertaLG2").innerHTML = "$" + precio.toFixed(2);
        document.getElementById("heartProductoOfertaLG2").onclick = agregarWishlist;
        document.getElementById("imagenOfertaLG2").onclick = mostrarProducto;

        $("#imagenRecomendacionesLG").attr("src", "https://animesouls.com/wp-content/uploads/2017/03/14.jpg");
        document.getElementById("nombreProductoRecomendacionesLG").innerHTML = "Sasuke Uchiha";
        document.getElementById("precioProductoRecomendacionesLG").innerHTML = "$" + precio.toFixed(2);
        document.getElementById("heartRecomendacionesOfertaLG").onclick = agregarWishlist;
        document.getElementById("imagenRecomendacionesLG").onclick = mostrarProducto;

        $("#imagenRecomendacionesLG2").attr("src", "https://vignette.wikia.nocookie.net/onepiece/images/5/58/Buggy_3D2Y.png/revision/latest?cb=20140903101130&path-prefix=es");
        document.getElementById("nombreProductoRecomendacionesLG2").innerHTML = "Buggy";
        document.getElementById("precioProductoRecomendacionesLG2").innerHTML = "$" + precio.toFixed(2);
        document.getElementById("heartRecomendacionesOfertaLG2").onclick = agregarWishlist;
        document.getElementById("imagenRecomendacionesLG2").onclick = mostrarProducto;
    }
});