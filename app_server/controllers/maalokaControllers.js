var db = require('../../db');
var Products = require('../models/products');

exports.getAll = function(req,res){
	console.log('select * from Products;');
	db.get().query('select * from Products;', function (err, rows) {
		var response = {};
		var data = [];

	    if (err){
	    	response.status = 'ERROR';
	    	response.message = err;
	  	}
	  	if (rows && rows.length > 0){
	  		for (var i=0; i<rows.length; i++){
	  			var product = new Products(rows[i].idProduct,
            rows[i].nameProduct, rows[i].cost, rows[i].description,
            rows[i].sale, rows[i].available, rows[i].sold,
						rows[i].idArtist, rows[i].idSubcategories);
	  			data.push(product);
	  		}
		    response.status = 'SUCCESS';
		    response.message = '';
		    response.data = data;
		}
		else{
			response.status = 'ERROR';
			response.message = 'No hay registros';
		}
		res.send(response);
	})
}

exports.getSale = function(req,res){
	console.log('select * from Products where not (sale=0);');
	db.get().query('select * from Products where not (sale=0);', function (err, rows) {
		var response = {};
		var data = [];

	    if (err){
	    	response.status = 'ERROR';
	    	response.message = err;
	  	}
	  	if (rows && rows.length > 0){
	  		for (var i=0; i<rows.length; i++){
	  			var product = new Products(rows[i].idProduct,
            rows[i].nameProduct, rows[i].cost, rows[i].description,
            rows[i].sale, rows[i].available, rows[i].sold,
						rows[i].idArtist, rows[i].idSubcategories);
	  			data.push(product);
	  		}
		    response.status = 'SUCCESS';
		    response.message = '';
		    response.data = data;
		}
		else{
			response.status = 'ERROR';
			response.message = 'No hay registros';
		}
		res.send(response);
	})
}

exports.getKitchen = function(req,res){
	console.log('select * from Products where idSubcategories=0;');
	db.get().query('select * from Products where idSubcategories=0;', function (err, rows) {
		var response = {};
		var data = [];

	    if (err){
	    	response.status = 'ERROR';
	    	response.message = err;
	  	}
	  	if (rows && rows.length > 0){
	  		for (var i=0; i<rows.length; i++){
	  			var product = new Products(rows[i].idProduct,
            rows[i].nameProduct, rows[i].cost, rows[i].description,
            rows[i].sale, rows[i].available, rows[i].sold,
						rows[i].idArtist, rows[i].idSubcategories);
	  			data.push(product);
	  		}
		    response.status = 'SUCCESS';
		    response.message = '';
		    response.data = data;
		}
		else{
			response.status = 'ERROR';
			response.message = 'No hay registros';
		}
		res.send(response);
	})
}

exports.getLivingRoom = function(req,res){
	console.log('select * from Products where idSubcategories=1;');
	db.get().query('select * from Products where idSubcategories=1;', function (err, rows) {
		var response = {};
		var data = [];

	    if (err){
	    	response.status = 'ERROR';
	    	response.message = err;
	  	}
	  	if (rows && rows.length > 0){
	  		for (var i=0; i<rows.length; i++){
	  			var product = new Products(rows[i].idProduct,
            rows[i].nameProduct, rows[i].cost, rows[i].description,
            rows[i].sale, rows[i].available, rows[i].sold,
						rows[i].idArtist, rows[i].idSubcategories);
	  			data.push(product);
	  		}
		    response.status = 'SUCCESS';
		    response.message = '';
		    response.data = data;
		}
		else{
			response.status = 'ERROR';
			response.message = 'No hay registros';
		}
		res.send(response);
	})
}
