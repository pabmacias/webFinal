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
	db.get().query('insert into Users (username, password, nameUser, mail, phone) values ("'+req.body.username+
		'","'+req.body.password+'","'+req.body.nameUser+'","'+req.body.mail+
		'","'+req.body.phone+'");', function (err, result) {

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
