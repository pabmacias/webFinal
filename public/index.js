function agregarWishlist(){
	console.log(this.dataset.id);
	var idP=this.dataset.id;
	if($(this).attr("src") == "heart.png"){
		$(this).attr("src", "blueHeart.png");
		//funcion para agregar a wishlist
	}
	else{
		$(this).attr("src", "heart.png");
		//funcion para eliminar de wishlist
	}

	var myKeyVals = { idProduct : idP }

	var saveData = $.ajax({
	      type: 'POST',
	      url: "/addWishlist",
	      data: myKeyVals,
	      dataType: "text",
	      success: function(resultData) { alert("Save Complete"); }
	});
	//saveData.error(function() { alert("Something went wrong"); });
}

function mostrarProducto(){
    //console.log(this.dataset.id); //como le mando el id del producto
    //window.location.replace("producto.html");
}

$(document).ready(function(){
	var sale = [];
	//var valor3 = [];
	//var recom = [];

	$.getJSON( "/maaloka/saleMax", { "status" : "status", "message" : "message", "data" : "data" } )
			.done(function( data, textStatus, jqXHR ) {
					if ( console && console.log ) {
							//console.log(listaProductos);].image);
							//console.log(data.data[0].nameProduct);
							console.log( "La solicitud se ha completado correctamente." );

							if($(window).width() >= 1200){


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
							//console.log(listaProductos);].image);
							//console.log(data.data[0].nameProduct);
							console.log( "La solicitud se ha completado correctamente." );

							if($(window).width() >= 1200){
						        var listaRecomendaciones = document.getElementsByClassName("productoRecomendacionesLG");

						        for(var i = 0; i < listaRecomendaciones.length; i++){
						            listaRecomendaciones[i].setAttribute("data-id", data.data[i].idProduct);
						        }

										console.log(data.data[0]);

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
