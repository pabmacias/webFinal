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
				console.log(rows);
	  		for (var i=0; i<rows.length; i++){
	  			var product = new Products(rows[i].idProduct,
            rows[i].nameProduct, rows[i].cost, rows[i].description,
            rows[i].sale, rows[i].available, rows[i].sold,
						rows[i].idArtist, rows[i].idSubcategories, rows[i].image);
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
						rows[i].idArtist, rows[i].idSubcategories, rows[i].image);
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

exports.getSaleMax = function(req,res){
	console.log('SELECT * FROM Products ORDER BY sale DESC LIMIT 2;');
	db.get().query('SELECT * FROM Products ORDER BY sale DESC LIMIT 2;', function (err, rows) {
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
						rows[i].idArtist, rows[i].idSubcategories, rows[i].image);
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

exports.getRecom = function(req,res){
	console.log('SELECT * FROM Products ORDER BY cost LIMIT 2');
	db.get().query('SELECT * FROM Products ORDER BY cost LIMIT 2', function (err, rows) {
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
						rows[i].idArtist, rows[i].idSubcategories, rows[i].image);
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
						rows[i].idArtist, rows[i].idSubcategories, rows[i].image);
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
						rows[i].idArtist, rows[i].idSubcategories, rows[i].image);
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

exports.getBedRoom = function(req,res){
	console.log('select * from Products where idSubcategories=2;');
	db.get().query('select * from Products where idSubcategories=2;', function (err, rows) {
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
						rows[i].idArtist, rows[i].idSubcategories, rows[i].image);
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

exports.getProduct = function(req,res){
	console.log('select * from Products where idProduct="'+req.body.idProduct+'";');
	db.get().query('select * from Products where idProduct="'+req.body.idProduct+'";', function (err, rows) {
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
						rows[i].idArtist, rows[i].idSubcategories, rows[i].image);
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
