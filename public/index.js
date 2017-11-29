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

function mostrarProducto(){
    //console.log(this.dataset.id); //como le mando el id del producto
    window.location.href = "producto.html?idProduct="+this.dataset.id;

		/*$.post( "/maaloka/getProduct", { "idProduct" : this.dataset.id }, null, "json" )
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
		});*/
}

$(document).ready(function(){
	var sale = [];

	$.getJSON( "/maaloka/saleMax", { "status" : "status", "message" : "message", "data" : "data" } )
		.done(function( data, textStatus, jqXHR ) {
			if ( console && console.log ) {

				if($(window).width() >= 768 && $(window).width() <= 991){
					$("#imagenOfertaSM").attr("src", data.data[0].image);
					$("#imagenOfertaSM").attr("data-id", data.data[0].idProduct);
				    document.getElementById("nombreProductoOfertaSM").innerHTML = data.data[0].nameProduct;
			        document.getElementById("precioProductoOfertaSM").innerHTML = "$" + data.data[0].cost.toFixed(2);
					$("#heartProductoOfertaSM").attr("data-id", data.data[0].idProduct);
					document.getElementById("heartProductoOfertaSM").onclick = agregarWishlist;
				    document.getElementById("imagenOfertaSM").onclick = mostrarProducto;
				}
				else if($(window).width() >= 992 && $(window).width() <= 1199){
					$("#imagenOfertaMD").attr("src", data.data[0].image);
					$("#imagenOfertaMD").attr("data-id", data.data[0].idProduct);
				    document.getElementById("nombreProductoOfertaMD").innerHTML = data.data[0].nameProduct;
			      document.getElementById("precioProductoOfertaMD").innerHTML = "$" + data.data[0].cost.toFixed(2);
					$("#heartProductoOfertaMD").attr("data-id", data.data[0].idProduct);
					document.getElementById("heartProductoOfertaMD").onclick = agregarWishlist;
				    document.getElementById("imagenOfertaMD").onclick = mostrarProducto;

					$("#imagenOfertaMD2").attr("data-id", data.data[1].idProduct);
				    $("#imagenOfertaMD2").attr("src", data.data[1].image);
			        document.getElementById("nombreProductoOfertaMD2").innerHTML = data.data[1].nameProduct;;
			        document.getElementById("precioProductoOfertaMD2").innerHTML = "$" + data.data[1].cost.toFixed(2);
					$("#heartProductoOfertaMD2").attr("data-id", data.data[1].idProduct);
				    document.getElementById("heartProductoOfertaMD2").onclick = agregarWishlist;
				    document.getElementById("imagenOfertaMD2").onclick = mostrarProducto;
				}
				else if($(window).width() >= 1200){
			        $("#imagenOfertaLG").attr("src", data.data[0].image);
					$("#imagenOfertaLG").attr("data-id", data.data[0].idProduct);
				    document.getElementById("nombreProductoOfertaLG").innerHTML = data.data[0].nameProduct;
			        document.getElementById("precioProductoOfertaLG").innerHTML = "$" + data.data[0].cost.toFixed(2);
					$("#heartProductoOfertaLG").attr("data-id", data.data[0].idProduct);
					document.getElementById("heartProductoOfertaLG").onclick = agregarWishlist;
				    document.getElementById("imagenOfertaLG").onclick = mostrarProducto;

					$("#imagenOfertaLG2").attr("data-id", data.data[1].idProduct);
				    $("#imagenOfertaLG2").attr("src", data.data[1].image);
			        document.getElementById("nombreProductoOfertaLG2").innerHTML = data.data[1].nameProduct;;
			        document.getElementById("precioProductoOfertaLG2").innerHTML = "$" + data.data[1].cost.toFixed(2);
					$("#heartProductoOfertaLG2").attr("data-id", data.data[1].idProduct);
				    document.getElementById("heartProductoOfertaLG2").onclick = agregarWishlist;
				    document.getElementById("imagenOfertaLG2").onclick = mostrarProducto;
			    }
			}
		})
		.fail(function( jqXHR, textStatus, errorThrown ) {
			if ( console && console.log ) {
				console.log( "Algo ha fallado: " +  textStatus );
			}
		});

	$.getJSON( "/maaloka/recom", { "status" : "status", "message" : "message", "data" : "data" } )
		.done(function( data, textStatus, jqXHR ) {
			if ( console && console.log ) {

				if($(window).width() >= 768 && $(window).width() <= 991){
					$("#imagenRecomendacionesSM").attr("src", data.data[0].image);
					$("#imagenRecomendacionesSM").attr("data-id", data.data[0].idProduct);
				    document.getElementById("nombreProductoRecomendacionesSM").innerHTML = data.data[0].nameProduct;
			        document.getElementById("precioProductoRecomendacionesSM").innerHTML = "$" + data.data[0].cost.toFixed(2);
					$("#heartProductoRecomendacionesSM").attr("data-id", data.data[0].idProduct);
					document.getElementById("heartProductoRecomendacionesSM").onclick = agregarWishlist;
				    document.getElementById("imagenRecomendacionesSM").onclick = mostrarProducto;
				}
				else if($(window).width() >= 992 && $(window).width() <= 1199){
					$("#imagenRecomendacionesMD").attr("src", data.data[0].image);
					$("#imagenRecomendacionesMD").attr("data-id", data.data[0].idProduct);
				    document.getElementById("nombreProductoRecomendacionesMD").innerHTML = data.data[0].nameProduct;
			        document.getElementById("precioProductoRecomendacionesMD").innerHTML = "$" + data.data[0].cost.toFixed(2);
					$("#heartProductoRecomendacionesMD").attr("data-id", data.data[0].idProduct);
					document.getElementById("heartProductoRecomendacionesMD").onclick = agregarWishlist;
				    document.getElementById("imagenRecomendacionesMD").onclick = mostrarProducto;

					$("#imagenRecomendacionesMD2").attr("data-id", data.data[1].idProduct);
				    $("#imagenRecomendacionesMD2").attr("src", data.data[1].image);
			        document.getElementById("nombreProductoRecomendacionesMD2").innerHTML = data.data[1].nameProduct;;
			        document.getElementById("precioProductoRecomendacionesMD2").innerHTML = "$" + data.data[1].cost.toFixed(2);
					$("#heartProductoRecomendacionesMD2").attr("data-id", data.data[1].idProduct);
				    document.getElementById("heartProductoRecomendacionesMD2").onclick = agregarWishlist;
				    document.getElementById("imagenRecomendacionesMD2").onclick = mostrarProducto;
				}
				else if($(window).width() >= 1200){
					$("#imagenRecomendacionesLG").attr("data-id", data.data[0].idProduct);
			        $("#imagenRecomendacionesLG").attr("src", data.data[0].image);
					document.getElementById("nombreProductoRecomendacionesLG").innerHTML = data.data[0].nameProduct;
			        document.getElementById("precioProductoRecomendacionesLG").innerHTML = "$" + data.data[0].cost.toFixed(2);
					$("#heartRecomendacionesOfertaLG").attr("data-id", data.data[0].idProduct);
			        document.getElementById("heartRecomendacionesOfertaLG").onclick = agregarWishlist;
					document.getElementById("imagenRecomendacionesLG").onclick = mostrarProducto;

					$("#imagenRecomendacionesLG2").attr("data-id", data.data[1].idProduct);
					$("#imagenRecomendacionesLG2").attr("src", data.data[1].image);
					document.getElementById("nombreProductoRecomendacionesLG2").innerHTML = data.data[1].nameProduct;;
					document.getElementById("precioProductoRecomendacionesLG2").innerHTML = "$" + data.data[1].cost.toFixed(2);
					$("#heartRecomendacionesOfertaLG2").attr("data-id", data.data[1].idProduct);
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

$(window).on('resize', function(){
   location.reload();
});
