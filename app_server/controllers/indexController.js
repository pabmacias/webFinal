
exports.login = function (req,res){
	var response = {status:'ERROR', message:'User not found'}
	res.send(response);
	//res.render('index', { title: 'Express' });
}

exports.register = function (req,res){
	var response = {status:'SUCCESS', message:'User registered',
									data: {user: {email:"Eduardo"}}}
	res.send(response);
	//res.render('index', { title: 'Express' });
}

exports.session = function (req, res) {
	let response = {};
	if (req.session && req.session.email) {
		data = {
			email: req.session.email;
		}
		response.status = "SUCCESS";
		response.message = "User already logged";
		response.data = data;
	}
	else {
		response.status = "ERROR";
		response.message = "User not logged in";
	}
	res.send(response);
}
