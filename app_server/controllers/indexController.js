var db = require('../../db');
var Wishlist = require('../models/wishlist');
//var Cart = require('../models/cart');

exports.login = function (req,res){
	console.log('select * from Users where mail="'+req.body.mail+'" and password="'+req.body.password+'";')
	db.get().query('select * from Users where mail="'+req.body.mail+'" and password="'+req.body.password+'";', function (err, rows) {
		var response = {};
		var data = [];

	    if (err){
	    	response.status = 'ERROR';
	    	response.message = err;
	  	}
	  	if (rows && rows.length > 0){
		    response.status = 'SUCCESS';
		    response.message = 'User logged in';
		    var data = {
		    	mail: rows[0].mail
		    }
		    req.session.mail = data.mail;
		    response.data = data;
		}
		else{
			response.status = 'ERROR';
			response.message = 'No hay registros';
		}
		res.send(response);
	})
}

exports.register = function (req,res){
	console.log('insert into Users (username, password, nameUser, mail, phone) values ("'+req.body.username+
		'","'+req.body.password+'","'+req.body.nameUser+'","'+req.body.mail+
		'","'+req.body.phone+'");');
	db.get().query('insert into Users (username, password, nameUser, mail, phone) values ("adios", "hola", "Adios", "adios@gmail.com", "123");',
	 function (err, result) {

		var response = {};
		var data = {};

	  if (err){
	    	response.status = 'ERROR';
	    	response.message = err;
	  	}
		else{
			data.insertId = result.insertId;
			response.status = 'SUCCESS';
			response.message = '';
			response.data = data;
		}
		res.send(response);
	})

	var idU = db.get().query('select idUser from Users where (mail="'+req.body.mail+'");');

	console.log(idU);

	db.get().query('insert into Wishlists (idUser) values ("'+idU+'");', function (err, result) {

		var response = {};
		var data = {};

	  if (err){
	    	response.status = 'ERROR';
	    	response.message = err;
	  	}
		else{
			data.insertId = result.insertId;
			response.status = 'SUCCESS';
			response.message = '';
			response.data = data;
		}
		res.send(response);
	})
}

exports.session = function (req,res){
	let response = {};
	if (req.session && req.session.mail){
		var data = {
			mail: req.session.mail
		}
		response.status = "SUCCESS";
		response.message = "User already logged";
		response.data = data
	}
	else{
		response.status = "ERROR";
		response.message = "User not logged in";
	}
	res.send(response);
}

exports.addWishlist = function (req,res){
	let response = {};

	if (req.session && req.session.mail){
		var data = {
			mail: req.session.mail
		}
		response.status = "SUCCESS";
		response.message = "User already logged";
		response.data = data
	}
	else{
		response.status = "ERROR";
		response.message = "User not logged in";
	}

	if (response.status == "SUCCESS") {

		db.get().query('select idUser from Users where (mail="'+req.session.mail+'");',
		 function (err, result) {

			var response = {};
			var data = {};

		  if (err){
		    	response.status = 'ERROR';
		    	response.message = err;
					res.send(response);
		  	}
			else{
				db.get().query('select idWishlist from Wishlists where (idUser='+result[0].idUser+');',
				 function (err, result) {

					var response = {};
					var data = {};

				  if (err){
				    	response.status = 'ERROR';
				    	response.message = err;
							res.send(response);
				  	}
					else{
						var idP=0;

						//console.log('insert into Wishlists_has_Products (idWishlist, idProduct) values ('+result[0].idWishlist+','+idP+');');
						db.get().query('insert into Wishlists_has_Products (idWishlist, idProduct) values ('+result[0].idWishlist+','+idP+');',
						 function (err, result) {

							var response = {};
							var data = {};

						  if (err){
						    	response.status = 'ERROR';
						    	response.message = err;
						  	}
							else{
								data.insertId = result.insertId;
								response.status = 'SUCCESS';
								response.message = '';
								response.data = data;
							}
							res.send(response);
						})
					}
				});
			}
		})
	}
	else {
		res.send(response);
	}
}

exports.addCart = function (req,res){
	let response = {};
	var idP=0
	//var idP=req.body.idProduct;

	if (req.session && req.session.mail){
		var data = {
			mail: req.session.mail
		}
		response.status = "SUCCESS";
		response.message = "User already logged";
		response.data = data
	}
	else{
		response.status = "ERROR";
		response.message = "User not logged in";
	}

	if (response.status == "SUCCESS") {

		db.get().query('select idUser from Users where (mail="'+req.session.mail+'");',
		 function (err, result) {

			var response = {};
			var data = {};

		  if (err){
		    	response.status = 'ERROR';
		    	response.message = err;
					res.send(response);
		  	}
			else{
				db.get().query('select idCart from Cart where (idUser='+result[0].idUser+');',
				 function (err, result) {

					var response = {};
					var data = {};

				  if (err){
				    	response.status = 'ERROR';
				    	response.message = err;
							res.send(response);
				  	}
					else{
						//var idP=0;

						//console.log('insert into Wishlists_has_Products (idWishlist, idProduct) values ('+result[0].idWishlist+','+idP+');');
						db.get().query('insert into Cart_has_Products (idCart, idProduct) values ('+result[0].idCart+','+idP+');',
						 function (err, result) {

							var response = {};
							var data = {};

						  if (err){
						    	response.status = 'ERROR';
						    	response.message = err;
						  	}
							else{
								data.insertId = result.insertId;
								response.status = 'SUCCESS';
								response.message = '';
								response.data = data;
							}
							res.send(response);
						})
					}
				});
			}
		})
	}
	else {
		res.send(response);
	}
}
