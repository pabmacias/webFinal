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
	var sale = [];
	//var valor3 = [];
	//var recom = [];

	$.getJSON( "/maaloka/saleMax", { "status" : "status", "message" : "message", "data" : "data" } )
			.done(function( data, textStatus, jqXHR ) {
					if ( console && console.log ) {
							//console.log(listaProductos);
							//console.log(data.data[0].nameProduct);
							console.log( "La solicitud se ha completado correctamente." );

							if($(window).width() >= 1200){
						        var listaOfertas = document.getElementsByClassName("productoOfertasLG");
						        var listaRecomendaciones = document.getElementsByClassName("productoRecomendacionesLG");
										var precio=0;

						        for(var i = 0; i < listaOfertas.length; i++){
						            listaOfertas[i].setAttribute("data-id", i);
						        }

						        for(var i = 0; i < listaOfertas.length; i++){
						            listaRecomendaciones[i].setAttribute("data-id", i);
						        }

										console.log(data.data[0]);

						        $("#imagenOfertaLG").attr("src", data.data[0].image);
						        document.getElementById("nombreProductoOfertaLG").innerHTML = data.data[0].nameProduct;
						        document.getElementById("precioProductoOfertaLG").innerHTML = "$" + data.data[0].cost.toFixed(2);
						        document.getElementById("heartProductoOfertaLG").onclick = agregarWishlist;
						        document.getElementById("imagenOfertaLG").onclick = mostrarProducto;

						        $("#imagenOfertaLG2").attr("src", data.data[1].image);
						        document.getElementById("nombreProductoOfertaLG2").innerHTML = data.data[1].nameProduct;;
						        document.getElementById("precioProductoOfertaLG2").innerHTML = "$" + data.data[1].cost.toFixed(2);
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
					}
			})
			.fail(function( jqXHR, textStatus, errorThrown ) {
					if ( console && console.log ) {
							console.log( "Algo ha fallado: " +  textStatus );
					}
	});
});
